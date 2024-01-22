## Duomo Landing Page

1. Create a landing page and craft a brief 3-slide quiz.
2. Submit quiz results to a backend route in Next.JS.

## Run App using Docker

```docker-compose up```

or

## Build Docker Images
(Note the period (.) at the end is required)

- for dev:
```docker build -f Dockerfile.dev -t my-docker-image-name .```

- for prod:
```docker build -f Dockerfile.prod -t my-docker-image-name .```

## Run app

- for dev (open in localhost 3000):
```docker run -d -p 3000:3000 my-docker-image-name```

- for prod (open in localhost 4000):
```docker run -d -p 4000:4000 my-docker-image-name```


A/B Testing [LINK](https://docs.google.com/document/d/1hMz1cQlXhxKNjCKsKg5qAKBMw-VBIb4DgrAMuSGd6Vc/edit?usp=sharing)
