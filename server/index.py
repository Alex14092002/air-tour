from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://vanhung909080:HcsjybkhVxXfOrfX@cluster0.mlgopbm.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Specify the database and collection
db = client['test']  # Thay 'your_database_name' bằng tên của database của bạn
collection = db['orders']

# Now you can perform operations on the 'orders' collection
# For example, retrieve all documents in the collection
cursor = collection.find()



# Để lấy thông tin cụ thể, bạn có thể sử dụng các truy vấn như find_one
# Ví dụ: Lấy thông tin của bản ghi đầu tiên
first_order = collection.find_one()

# Hoặc sử dụng các điều kiện để lấy các bản ghi cụ thể
# Ví dụ: Lấy các bản ghi có trường 'status' là 'shipped'
shipped_orders = collection.find({"idUser": "655544f76075f2bff0a64efc"})
for order in shipped_orders:
    print("order of id:", order)
