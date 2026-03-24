person = {
    "name": "Chien Nguyen",
    "age": 23 ,
    "weight" : 167.4
}


print(person)
print(person["age"])
print(person["weight"]
)
if "email" in person:
    print("email exists")
else :
    print("no emails")

print("\n test #2 \n")

person["age"] = 24
person["weight"] = 160
person ["email"] = "chieniscool123@gmail.com"

print(person)
print(person["age"])
print(person["weight"])

if "email" in person:
    print("email exists")
else :
    print("no emails")


print("\n test #3 \n")
for key in person:
    print(f"{key}  :  {person[key]}")

    users = [
    {"id": 1, "name": "Alice", "age": 25},
    {"id": 2, "name": "Bob", "age": 30},
    {"id": 3, "name": "Charlie", "age": 35}
]

# Access first user's name
alice_name = users[0]["name"]  # "Alice"

# Loop and print
for user in users:
    print(f"{user['name']} is {user['age']} years old")