from dotenv import load_dotenv
from decouple import config
import os
# 방법 1
load_dotenv('.env')
client_id = os.getenv('CLIENT_ID')
print('방법 1 : ', client_id)
# 방법 2
client_id = config('CLIENT_ID')
print('방법 2 : ', client_id)