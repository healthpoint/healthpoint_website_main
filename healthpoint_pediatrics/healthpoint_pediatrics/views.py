import os
import html
from django.http import Http404
from django.shortcuts import render
#from django.utils.safestring import mark_safe
from .settings import BASE_DIR

def main_view(request, page):
    if not page:                            # set domain level access to 'home'
        page = 'home/'
    page = page[:-1]                        # remove trailing forward slash
    
    context = {
        'page': page,
        'title': page,
        'menu_selector': {
            'home': '',
            'about': '',
            'providers': '',
            'services': '',
            'location': '',
            'hours': '',
            'financial': '',
            'contact': ''
            },
        'content_visibility': {
            'home': 'row ',
            'about': 'row ',
            'providers': 'row ',
            'services': 'row ',
            'location': 'row ',
            'hours': 'row ',
            'financial': 'row ',
            'contact': 'row '
            }
        }
        
    for key in context['menu_selector']:
        visibility = 'hidden'
        if key == page:
            context['menu_selector'][key] = 'active'
            visibility = 'visible'
        context['content_visibility'][key] += visibility
    return render(request, 'main.html', context)
