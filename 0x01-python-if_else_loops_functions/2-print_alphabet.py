#!/usr/bin/python3
"""Print the alphabet in lower case, not followed by a new line."""
for letter in range(97, 123):
    print("{}".format(chr(letter)), end="")
