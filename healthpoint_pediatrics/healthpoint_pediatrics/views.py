from django.http import Http404, HttpResponse

def main_view(request, page):
    page = page[:-1]                        # remove trailing forward slash
    links = activate_link(page)             # set "active" link
    return HttpResponse('<h1>' + page + '</h1>')

# Takes the page name and adds "active" class to corresponding link    
def activate_link(page):
    return