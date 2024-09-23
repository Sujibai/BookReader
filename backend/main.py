from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

# 添加 CORS 中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

class Item(BaseModel):
    image: str
    text: str

def generate_random_chinese_string():
    return ''.join(chr(random.randint(0x4e00, 0x9fff)) for _ in range(random.randint(2, 20)))

@app.get("/api/data", response_model=list[Item], summary="获取随机数据", description="返回一个包含随机生成中文字符串和图像的列表。")
async def get_data():
    data = []
    for _ in range(35):
        item = Item(
            image=random.choice(['/300.jpg', '/500.jpg', '/600.jpg', '/400.jpg']),
            text=generate_random_chinese_string()
        )
        data.append(item)
    return data
