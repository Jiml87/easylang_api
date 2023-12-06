FROM python:3
ENV PYTHONDONTWRITEBYTECODE 1
WORKDIR /project
COPY Pipfile Pipfile.lock /project/
RUN pip3 install pipenv && pipenv install --system
# RUN pipenv install Django
COPY . /project/