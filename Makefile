
bash:
	docker compose exec app bash

start:
	docker compose up -d app

down:
	docker compose down app

t_components:
	docker compose run --rm cypress run --component

tests: t_components
