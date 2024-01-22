FROM python:3
ENV PYTHONDONTWRITEBYTECODE 1
WORKDIR /project
COPY Pipfile Pipfile.lock /project/
RUN pip3 install pipenv && pipenv install --system
# RUN pipenv install Django
COPY . /project/
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3","--timeout", "120", "config.wsgi:application"]