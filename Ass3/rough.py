import random

# Card values with ranking
card_order = ['2', '3', '4', '5', '6', '7', '8',
              '9', '10', 'J', 'Q', 'K', 'A']

suits = ['pan', 'iit', 'hukum', 'chitdi']

# Create deck
deck = [(value, suit) for value in card_order for suit in suits]
random.shuffle(deck)

players = ["Swati", "Akash", "Ivaan", "Vineet"]

# Give 3 cards each
player_cards = {}
for player in players:
    player_cards[player] = [deck.pop() for _ in range(3)]

# ---- Hand Evaluation ---- #

def get_rank(cards):
    values = sorted([card_order.index(card[0]) for card in cards])
    suits_list = [card[1] for card in cards]

    is_sequence = values[2] - values[1] == 1 and values[1] - values[0] == 1
    is_color = len(set(suits_list)) == 1
    is_trail = len(set(values)) == 1
    is_pair = len(set(values)) == 2

    if is_trail:
        return (6, max(values))
    elif is_sequence and is_color:
        return (5, max(values))
    elif is_sequence:
        return (4, max(values))
    elif is_color:
        return (3, max(values))
    elif is_pair:
        return (2, max(values))
    else:
        return (1, max(values))

# Evaluate all players
results = {}

for player, cards in player_cards.items():
    results[player] = get_rank(cards)

# Find winner
winner = max(results, key=results.get)

# ---- Print ---- #

print("Teen Patti Game Result\n")

for player, cards in player_cards.items():
    print(player, ":", cards)

print("\nWinner is:", winner)
