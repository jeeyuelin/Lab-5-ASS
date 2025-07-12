import json

with open('books.json') as f:
    data = json.load(f)

for book in data['Books']:
    print(f"""
Title: {book['title']}
Author: {book['author']}
Year: {book['publicationYear']}
Genres: {', '.join(book['genres'])}
    """)