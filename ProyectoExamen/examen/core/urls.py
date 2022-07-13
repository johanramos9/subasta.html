from django.urls import path, include
from .views import home, vender, contacto, listar_productos, eliminar_producto, modificar_producto, ProductoViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('producto', ProductoViewset)



urlpatterns = [

    path('', home, name="home"),
    path('vender/', vender, name="vender"),
    path('contacto/', contacto, name="contacto"),
    path('listar-productos/', listar_productos, name="listar_productos"),
    path('eliminar-producto/<id>/', eliminar_producto, name="eliminar_producto"),
    path('modificar-producto/<id>/', modificar_producto, name="modificar_producto"),

    path('api/', include(router.urls)),
]