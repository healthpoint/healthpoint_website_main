import os
import html
from django.http import Http404
from django.shortcuts import render
from .settings import BASE_DIR

def main_view(request, page):
    if not page:                            # set domain level access to 'home'
        page = 'home/'
    page = page[:-1]                        # remove trailing forward slash
    links = activate_link(page)             # set "active" link
    context = {'title': page,
                'main_menu': links}
    return render(request, 'base.html', context)

# Takes the page name and adds "active" class to corresponding link    
def activate_link(page):
    main_menu = os.path.join(BASE_DIR, 'templates/main_menu.html')
    with open(main_menu) as f:
        links = f.read()
    return links