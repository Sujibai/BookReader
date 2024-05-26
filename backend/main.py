from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random
import string
# import midmsf


app = FastAPI()

# 添加 CORS 中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 允许所有来源的请求
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # 允许的 HTTP 方法
    allow_headers=["*"],  # 允许所有请求头
)

def generate_random_chinese_string():
    # 定义中文字符集
    chinese_characters = ''.join(chr(random.randint(0x4e00, 0x9fff)) for _ in range(random.randint(2, 20)))
    return chinese_characters

@app.get("/api/data")
async def root():
    data = []
    for _ in range(35):
        item = {
            'image': random.choice(['/300.jpg','/500.jpg','/600.jpg', '/400.jpg']),
            'text': generate_random_chinese_string()
        }
        data.append(item)
    return data

# MyMsf = midmsf.MidMsf()

# @app.get("/api/options")
# async def get_options():
#     options = MyMsf.get_options()
#     return options
