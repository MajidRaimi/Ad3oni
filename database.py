import os
from tinydb import Query, TinyDB



# Try connecting to MongoDB
try:
    db = TinyDB('database/channels.json')
    channels = Query()
except Exception as e:
    print(f"Could not Create a database: {e}")
    exit()


def add_channel(guildId, channelId):
    db = TinyDB('database/channels.json')
    Channels = Query()
    try:
        channel = db.search(Channels.guild_id == guildId)
        if not channel:
            db.insert({"guild_id": guildId, "channels": [channelId]})
        else:
            if channelId in channel[0]["channels"]:
                return True
            print(channel[0]["channels"])
            channel[0]["channels"].append(channelId)
            db.update( {
                'guild_id': guildId,
                'channels' : channel[0]["channels"]
            } , Channels.guild_id == guildId)
        return True
    except Exception as e:
        print(str(e))
        return False

def remove_channel(guildId, channelId):
    try:
        db = TinyDB('database/channels.json')
        Channels = Query()
        channel = db.search(Channels.guild_id == guildId)
        if not channel:
            raise Exception('Could not remove')
        if channelId in channel[0]["channels"]:
            channel[0]["channels"].remove(channelId)
            db.update({
                'channels': channel[0]["channels"]
            }, Channels.guild_id == guildId)
        return True
    except Exception as e:
        print(str(e))
        return False

async def send_message(bot, message):
    docs = collection.find()
    for doc in docs:
        for channelId in doc["channels"]:
            await send_message_to_specific_channel(doc['_id'], channelId, message, bot)

async def send_message_to_specific_channel(guild_id: int, channel_id: int, message_content: str, bot):
    guild = bot.get_guild(int(guild_id))
    if guild:
        channel = guild.get_channel(channel_id)
        if channel:
            await channel.send(message_content)
        else:
            print(f"Channel with ID {channel_id} not found in guild {guild.name}.")
    else:
        print(f"Guild with ID {guild_id} not found.")


def print_guilds_and_channels_from_db():
    try:
        db = TinyDB('database/channels.json')
        Channels = Query()
        guild_data = db.all()
        for guild_info in guild_data:
            guild_id = guild_info["guild_id"]
            channels = guild_info["channels"]
            
            print(f"Guild ID: {guild_id}")
            print("Channels:")
            for channel_id in channels:
                print(f"- {channel_id}")
            print()
    
    except Exception as e:
        print(str(e))
