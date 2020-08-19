from django.http import HttpResponse
from django.shortcuts import render
from pymongo import *

def TickTakGame(request):
    return render(request, 'index.html')


def LoginPage(request):
    return render(request, 'LoginPage.html')


def check_user(request):
    connection = MongoClient(
        'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false')
    userdb = connection['users']
    db_collection = userdb['player']

    if request.method == 'POST':
        Username = request.POST.get("user_name")
        Pass = request.POST.get("password")
        userdocument = db_collection.find_one({"username": str(Username),"password": str(Pass)})

        if userdocument:
            connection.close()
            user_Date = {"Username": userdocument["username"], "Password": userdocument["password"]}
            return render(request, 'index.html', user_Date)
        else:
            Msg = {"message":"username or password was wrong"}
            return render(request, 'LoginPage.html', Msg)


def register_user(request):
    connection = MongoClient(
     'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false')
    userdb = connection['users']
    db_collection = userdb['player']
    if request.method == 'POST':
        Username = request.POST.get("Username")
        Pass = request.POST.get("Password")
        Email = request.POST.get("Email")
        player_Data = {

            "username": Username,
            "password": Pass,
            "email": Email
        }
        if db_collection.insert_one(player_Data).inserted_id :
            connection.close()
            Msg = {"Succ_message": "User Register successfully"}
            return render(request, 'LoginPage.html', Msg)


