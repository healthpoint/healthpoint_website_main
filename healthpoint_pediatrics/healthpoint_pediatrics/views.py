from django.http import Http404, HttpResponse

def main_view(request, page):
    page = page[:-1]
    return HttpResponse('<h1>' + page + '</h1>')