import sys
import json
from random import randint, choice
from nltk.corpus import wordnet

def generate_password(city, word1, word2):
    password = ''
    special_Characters = '!"£$%^&*()[]:;@#~?<>'
    divider = lambda x: choice(x)
    doubler = lambda x: x + x

    password = doubler(divider(special_Characters))
    password += city + doubler(divider(special_Characters))

    # city = input('What is a city you like that you have visited? ')
    # password = password + city + doubler(divider(special_Characters))

    # word1 = input('What is a word that you like (do not type a name) ')

    def synonym(x):
        synonym_list = []
        for syn in wordnet.synsets(x):
            for lemm in syn.lemmas():
                synonym_list.append(lemm.name())
        return choice(synonym_list) if synonym_list else x

    password += synonym(word1) + doubler(divider(special_Characters))

    # word2 = input('What is a second word that you like (do not type a name) ')
    password += synonym(word2) + str(randint(0, 99))

    return password

if __name__ == "__main__":
    input_data = sys.stdin.read()
    data = json.loads(input_data)
    city = data['city']
    word1 = data['word1']
    word2 = data['word2']
    print(generate_password(city, word1, word2))

