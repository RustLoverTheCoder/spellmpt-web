docker build -t spellmpt/lastest .
docker run -p 8085:8085 -d -it --name spellmpt [image]