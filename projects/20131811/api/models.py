from flask_sqlalchemy import SQLAlchemy
from werkzeug import generate_password_hash, check_password_hash
from sqlalchemy.orm import relationship, backref
from datetime import datetime
import json

db = SQLAlchemy()


def myconverter(o):
    if isinstance(o, datetime):
        return o.__str__()

class User(db.Model):
    __tablename__ = 'user'
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}

    id = db.Column(db.Integer, primary_key=True)
    account = db.Column(db.String(300))
    password = db.Column(db.String(300))

    def __init__(self, account, password):
        self.account = account
        self.set_password(password)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def serialize(self):
        return json.dumps({
            'id': self.id,
            'account': self.account,
            'password': self.password
        })

class Movie(db.Model):
    __tablename__ = 'movie'
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(300))
    photo = db.Column(db.String) #사진 url  
    total_star = db.Column(db.Integer) #이거
    people_num = db.Column(db.Integer)
    last_update = db.Column(db.DateTime) #이거  

    def __init__(self, name, photo):
        self.name = name
        self.photo = photo
        self.last_update = datetime.now() #현재시간
        self.total_star = 0
        self.people_num = 0

    def serialize(self):
        return json.dumps({
            'id' : self.id,
            'name' : self.name,
            'photo' : self.photo,
            'total_star' : self.total_star,
            'people_num' : self.people_num,
            'last_update' : self.last_update
        },default=myconverter)
    
class Review(db.Model):
    __tablename__ = 'review'
    __table_args__ = {'mysql_collate': 'utf8_general_ci'}

    id = db.Column(db.Integer, primary_key=True)
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    content = db.Column(db.Text)
    star = db.Column(db.Integer)

    movie = relationship('Movie', backref=backref('movies', order_by=id))
    user = relationship('User', backref=backref('users', order_by=id))

    def __init__(self, movie_id, user_id, content, star):
        self.movie_id = movie_id
        self.user_id = user_id
        self.content = content
        self.star = star

    def serialize(self):
        return json.dumps({
            'id' : self.id,
            'movie_id' : self.movie_id,
            'user_id' : self.user_id,
            'content' : self.content,
            'star' : self.star
        })


class LoginSession(db.Model):
    __tablename__ = 'login_session'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    jti = db.Column(db.Text)

    user = relationship('User')

    def __init__(self, user_id, jti):
        self.user_id = user_id
        self.jti = jti