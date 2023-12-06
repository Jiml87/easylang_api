from django.urls import path, include
# from rest_framework.documentation import include_docs_urls


v1_patterns = [
    path('', include('lang.urls')),
    # path('docs/', include_docs_urls(title='Words API')),
    # path('auth/', include(('auth.urls', 'auth'))),
]


urlpatterns = [
    path('v1/', include((v1_patterns, 'v1'))),
]
