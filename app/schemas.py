from pydantic import BaseModel
from typing import List

class Symptoms(BaseModel):
    symptoms : List[str]