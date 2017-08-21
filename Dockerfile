FROM imorti/sails-docker

ADD . /src/app

# Define working directory.
WORKDIR /src/app

RUN cd /src/app

# Expose ports.
EXPOSE 1337

CMD ["sails", "lift", "--prod"]
