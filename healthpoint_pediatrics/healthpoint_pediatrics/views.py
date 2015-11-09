import os
import html
from django.http import Http404
from django.shortcuts import render
from django.utils.safestring import mark_safe
from .settings import BASE_DIR

def main_view(request, page):
    if not page:                            # set domain level access to 'home'
        page = 'home/'
    page = page[:-1]                        # remove trailing forward slash
    context = {
        'title': page,
        'menu': {
            'home': '',
            'about': '',
            'providers': '',
            'services': '',
            'location': '',
            'hours': '',
            'financial': '',
            'contact': ''
            }
        }
        
    for key in context['menu']:
        if key == page:
            context['menu'][key] = mark_safe('class="active"')
            
    return render(request, 'main.html', context)
