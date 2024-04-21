from django.http import HttpResponse


def index(request):
    return HttpResponse("<h2>Главная</h2>")


def about(request):
    return HttpResponse("<h2>О сайте</h2>")


def contact(request):
    return HttpResponse("<h2>Контакты</h2>")

from django.http import JsonResponse
from catboost import CatBoostClassifier

# Загрузите модель CatBoost CBM
model = CatBoostClassifier().load_model("\catboost_model.cbm")

def predict(request):
    # Получите данные запроса и преобразуйте их в формат, который может обрабатывать CatBoost CBM
    data = request.GET.get('data')
    features = [float(x) for x in data.split(',')]

    # Сделайте прогноз с помощью модели CatBoost CBM
    prediction = model.predict([features])

    # Отправьте прогноз в формате JSON
    return JsonResponse({'prediction': prediction[0]})