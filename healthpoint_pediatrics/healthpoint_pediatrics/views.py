import os
import html
from django.http import Http404
from django.shortcuts import render
#from django.utils.safestring import mark_safe
from .settings import BASE_DIR

def main_view(request):
    context = {
        'page': 'home',
        'title': 'home',
        'menu_item': {
            'home': 'active',
            'about': '',
            'providers': '',
            'services': '',
            'location': '',
            'hours': '',
            'financial': '',
            'contact': ''
            },
        'content_visibility': {
            'home': '',
            'about': 'hidden',
            'providers': 'hidden',
            'services': 'hidden',
            'location': 'hidden',
            'hours': 'hidden',
            'financial': 'hidden',
            'contact': 'hidden'
            }
        }
    return render(request, 'main.html', context)

# def main_view(request, page):
#     if not page:                            # set domain level access to 'home'
#         page = 'home/'
#     page = page[:-1]                        # remove trailing forward slash
    
#     context = {
#         'page': page,
#         'title': page,
#         'menu_item': {
#             'home': '',
#             'about': '',
#             'providers': '',
#             'services': '',
#             'location': '',
#             'hours': '',
#             'financial': '',
#             'contact': ''
#             },
#         'content_visibility': {
#             'home': 'row ',
#             'about': 'row ',
#             'providers': 'row ',
#             'services': 'row ',
#             'location': 'row ',
#             'hours': 'row ',
#             'financial': 'row ',
#             'contact': 'row '
#             }
#         }
        
#     for key in context['menu_item']:
#         visibility = 'hidden'
#         if key == page:
#             context['menu_item'][key] = 'active'
#             visibility = ''
#         context['content_visibility'][key] += visibility
#     return render(request, 'main.html', context)
