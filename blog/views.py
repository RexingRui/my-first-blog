from django.shortcuts import render
from django.http import HttpResponse

def post_list(request):
	return render(request, 'blog/google_chart.html', {})

# Create your views here.
