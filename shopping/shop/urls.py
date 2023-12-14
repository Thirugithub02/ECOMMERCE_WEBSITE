from django.contrib import admin
from django.urls import path
from shop import views

urlpatterns = [
    path("",views.homepage,name="home"),
    path("REGISTER",views.register,name="register"),
    path("LOGOUT",views.logout_page,name="logout"),
    path("LOGIN",views.login_page,name="login"),
    path("COLLECTIONS",views.collections,name="collections"),
    path("COLLECTIONS/<str:name>",views.collectionsview,name="collections"),
    path("COLLECTIONS/<str:cname>/<str:pname>",views.product_details,name="product_details"),
    path("addtocart",views.add_to_cart,name="addtocart"),
    path("CART",views.cart_page,name="cart"),
    path("remove_cart/<str:cid>",views.remove_cart,name="remove_cart"),
]
