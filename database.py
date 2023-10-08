import os
from pymongo import MongoClient

# Try connecting to MongoDB
try:
    client = MongoClient(os.getenv('DATABASE_URL'))
except Exception as e:
    print(f"Could not connect to MongoDB: {e}")
    exit()

db = client["Ad3oni"]
collection = db["discord"]


def add_channel_channel(guildId, channelId):
    doc = collection.find_one(guildId)
    if not doc:
        collection.insert_one({"_id": guildId, "channels": [channelId]})
    else:
        if channelId in doc["channels"]:
            return
        doc["channels"].append(channelId)
        collection.update_one({"_id": guildId}, {"$set": {"channels": doc["channels"]}})


def remove_channel_id(guildId, channelId):
    doc = collection.find_one(guildId)
    if not doc:
        return
    else:
        if channelId not in doc["channels"]:
            return
        doc["channels"].remove(channelId)
        collection.update_one({"_id": guildId}, {"$set": {"channels": doc["channels"]}})


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


def reset_channels(guildId):
    collection.update_one({"_id": guildId}, {"$set": {"channels": []}})

def get_single_prayer():
    print('Hello')
    collection = db['prayers']
    doc = collection.aggregate([{ '$sample': { 'size': 1 } }]).next()
    return doc['plainText']



