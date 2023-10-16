from pydantic import BaseModel

class ChannelModel(BaseModel):
    guild_id : str
    channels: [str]

