from django.shortcuts import render, redirect, get_object_or_404
from .forms import ProductoForm
from .models import Producto, Marca
from django.contrib import messages
from rest_framework import viewsets
from .serializers import ProductoSerializer

# Create your views here.

class ProductoViewset(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer



def home(request):
    productos = Producto.objects.all()
    data = {
        'productos': productos
    }
    return render(request, 'core/home.html', data)


def contacto(request):
    return render(request, 'core/contacto.html')




## INGRESAR 


def vender(request):

    data = {
        'form': ProductoForm()
    }

    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Publicado correctamente"
        else:
            data["form"] = formulario
    return render(request, 'core/vender.html', data)


## LISTAR

def listar_productos(request):
    productos = Producto.objects.all()

    data = {
        'productos': productos
    }
    return render(request, 'core/CRUD/listar.html', data)


## ELIMINAR 

def eliminar_producto(request, id):
    producto = Producto.objects.get(id=id)

    try:
        producto.delete()
        mensaje = "Eliminado correctamente"
        messages.success(request, mensaje)
    except:
        mensaje = "No se ha podido eliminar"
        messages.error(request, mensaje)
    return redirect('listar_productos')



## MODIFICAR


def modificar_producto(request, id):

    producto = get_object_or_404(Producto, id=id)
    
    data = {
        'form': ProductoForm(instance=producto)
    }

    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST, instance=producto, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "modificado correctamente"
            return redirect(to="listar_productos")
        data["form"] = formulario

    return render(request, 'core/CRUD/modificar.html', data)

