import discord
from discord.ext import commands
from dotenv import load_dotenv
import os
from pymongo import MongoClient
from database import add_channel_channel, remove_channel_id, send_message, get_single_prayer

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
    try:
        synced = await bot.tree.sync()
        prayer = get_single_prayer()
        print(prayer)
        await send_message(bot, prayer)
    except Exception as e:
        print(e)


@bot.tree.command(name='add', description='Start receiving prayers everyday at 8:00 AM at this channel 🙏')
async def add(interaction: discord.Interaction):
    guild_id = interaction.guild.id
    channel_id = interaction.channel.id
    add_channel_channel(guild_id, channel_id)
    await interaction.response.send_message(f'Added to {interaction.channel.name} channel')


@bot.tree.command(name='remove', description='Stop receiving prayers everyday at 8:00 AM at this channel 🙏')
async def remove(interaction: discord.Interaction):
    guild_id = interaction.guild.id
    channel_id = interaction.channel.id
    remove_channel_id(guild_id, channel_id)
    # send message to the server
    await interaction.response.send_message(f'Removed from {interaction.channel.name} channel')


bot.run(TOKEN)
