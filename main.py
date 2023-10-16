import discord
from discord.ext import commands
from dotenv import load_dotenv
import os
from pymongo import MongoClient
from database import add_channel, remove_channel
import asyncio
from datetime import datetime, timedelta
from tinydb import TinyDB, Query
import schedule
import time


load_dotenv()

TOKEN = os.getenv('DISCORD_TOKEN')

client = MongoClient(os.getenv('DATABASE_URL'))

intents = discord.Intents.all()
intents.guilds = True
intents.messages = True

bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print(f'{bot.user.name} has connected to Discord!')
    await schedule_send_message("اَللَّهُمَّ إِنِّي اِسْتَوْدَعْتُكُ مَا حَفِظَتْ وَمَا قَرَأَتْ وَمَا تَعَلَّمَتْ فَرَدَهُ لِي عِنْدَ حَاجَتِي إِلَيْهِ ، أَنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٍ")

async def schedule_send_message(message):
    while True:
        now = datetime.now()
        target_time = now.replace(hour=21, minute=41, second=20, microsecond=0)
        if now >= target_time:
            target_time += timedelta(days=1)
        time_until_message = target_time - now
        await asyncio.sleep(time_until_message.total_seconds())
        await send_message_to_all(message)

# Rest of your code

bot.run(TOKEN)

@bot.tree.command(name='add', description='Start receiving prayers everyday at 8:00 AM at this channel 🙏')
async def add(interaction: discord.Interaction):
    guild_id = interaction.guild.id
    channel_id = interaction.channel.id
    if add_channel(guild_id, channel_id):
        await interaction.response.send_message(f'Added to {interaction.channel.name} channel ✅')
    else:
        await interaction.response.send_message(f'Error occurred while adding channel {interaction.channel.name}\nplease try again later or contact the developer 🔴')


@bot.tree.command(name='remove', description='Stop receiving prayers everyday at 8:00 AM at this channel 🙏')
async def remove(interaction: discord.Interaction):
    guild_id = interaction.guild.id
    channel_id = interaction.channel.id
    if remove_channel(guild_id, channel_id):
        await interaction.response.send_message(f'Removed channel {interaction.channel.name} from receiving 🙏')
    else:
        await interaction.response.send_message(f'Error occurred while removing channel {interaction.channel.name}\nplease try again later or contact the developer 🔴')


async def send_message_to_all(message):
        print('Sening message to all')
        try:
            db = TinyDB('database/channels.json')
            Channels = Query()
            guild_data = db.all()
            for guild_info in guild_data:
                guild = bot.get_guild(guild_info["guild_id"])
                for channel_id in guild_info["channels"] :
                    channel = guild.get_channel(channel_id)
                    await channel.send(message)
        except Exception as e:
            print(str(e))



bot.run(TOKEN)
