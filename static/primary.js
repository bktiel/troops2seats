//placeholder image when none exist
var noImage = "data:image/jpeg;base64,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"

var truk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADhCAIAAAD9Hh/8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAE0/SURBVHhe7Z0HfBZV1sZHXSB0Qif0XqRJUxRQEBELCK6LshZkFfxcXEUX9XNBPnGtay+4q4LKgl1U7IqAiiAK0kFKIBBqIPQkhKDm+9/3GS5DGhHfljfz/O7v5s6dOzP3nnuee86ZmXdyUnZ2tuPDh4/I4WT3rw8fPiIEn4Q+fEQYPgl9+IgwfBL68BFh+CT04SPC8Enow0eE4ZPQh48IwyehDx8Rhk9CHz4iDJ+EPnxEGD4JffiIMHwS+vARYfgk9OEjwvBJ6MNHhOGT0IePCMMnoQ8fEYZPQh8+IgyfhD58RBg+CX34iDB8EvrwEWH4JPThI8Lwv7YWemRlOfv3m8Lu3Q7SrlzZqVYtsOMIqCSd7C+IxRQ+CUOMAwecH35wvv/eWbLE+eUXp1w5kxISnObNTWrc2Nm+3Vm71qlRw2nY0DRgOkqXNslHsYFPwpABwcLA11933njD+fFH59AhY+sOH3Z+/dWpUsWpX9+pW9eU09OdjAynVCljHhs0cGrVcuLjnfLlndq1TQNyH7EOn4Qhw4YNzttvO5MnOz/95Pz8s1uZA6ec4px0krsX61e2rCEqm5jKpk2dZs2cJk0MFZVgpo9YhE/C0CAz03n2WWfiRGf9ehMTwjSgHIEfV+Z/+IPhJwni4bXCRpKMZ506JvcRQ/BJGBqsWOFccokxhjicAPopYehIVCpJ+NRbZqpsQWOxEVrWq+eykUiSsghZsaLb0keRhU/CYAN5bt7svPii889/mk3LPctGyqokUfnLL6amRAlTIAH4xi7K+KU6ShAVyfFarXkkjLTmkaN8FEH4JAw29u933nnHGT/eWbjQbEIwEkL22j2bqFFSPQSjGQmyKVGGiiKkBSe05hH6iY3EkKIiqVIlt6WPogCfhMHG/PnOffc5X33lPhuEKrBL1MoN8bAAyPSRQzzLRu+ptJe8TBmXjRhJzGPt2ubuTq1aLrd1Bh9RCZ+EwQPc2LXLee4558knnb173Ur8TBmx3ylnWT/xjVOJjfmZR+jXpInhYYUK7o1WmFmjhjmK/kBXmvmIGvgkDB4g3mefOU89ZZ7OQ0hMEMQgHT7sNggWLBtJ+ZlHEjNLHyAhbip51aqGh5CzdWvzwgBsJI+Pdw/xETn4JAweFi92HnrI+fxzw0YxkBxueOkRXORpHsntnNIBW8YqwjrMILm9v0q5YkWnUSNjKv3nkBGCT8Lg4d//dsaMMQyEdbKBIWVgDlg2kuSpwsY8r07H9FocDcqWdV/N0fMPqNiihXmBzkcY4ZMwSFi+3Bk71nn/fdcJtKYp/ODqsJGcBN/ohgipXWx6Z1w1AlSsX9+wsUEDl43k/nPI0CNaSYjeZGaadRotsWBdpx7FQsmiCnTs6adNSkoym+E3g/nBmkdgQ1PLQ7qX5+zjo4qN5E2bumzEg/URGkQlCQ8edObOdbZtM7/6UaBSvbqTmmp+cKAXnfGmSpQwNxUow1WW+ZIlnbi4wMH5gGF6+Rxc7Njh9OvnLFpkFJ2roPdcLhpIaEGvSLBRtpGOUaBGPCygqzirUFGchI1K/nPIoCL6SAipPvrI3Ohfs8a8dckCjE5jYdCSqlVNjqITtOghGBRFmdAJdAWzCSjjTaWkmJ8mVKhgSLtrl6mnLINQpoz5EUMQCcmSMXOmIaF4Ll3HYoNok62gTkoC5LLbANkqjMyz24hXbGzUyOnUyenQwb3j6uN3I8pIeOiQ8+mn5jnbd9+57z2T6GGOTmIJVY8BhF0AZmI20QkqYawoSpsDB4xzBRU5M2SuWdNQtFkzY1ppTPqdizqXW7jQeeYZZ9Iks2kVWiSMciAfQIclZ5sYlNhIyg0aNGnidOninHaasYpIEn+EnNXNxwkhmkjIlK9c6dxxhzEscMYLaUZueOtRJsokbyUspR6KcnKoi41SoU0bp1UrozrshYotWzodO5r2kAe3tmDP1ov0dOeJJ5yXXjoaDXIJrl4kSOgFQrPJ0hIgrtzmkQasaCSWMCRJatvW3NdhjSP5zupvRNSQENbBwClTjEmRA4kSSKHVQ+kEZRQCJSChHGxSUAPbTIUCQBsUiJwzVKxobCmbGF7WdbysM84w/MT7woSSOH9+4HB85mHDnHnzTBlwHvXwuH2IWiCWPJPGJUJaIBzmSAnzyELWvbtz+ulGpAiQROju43iIGhLCwJdfdqZOdTZuNNPMrItptnsUVImiw1jNrngIqJfqa1NKY8uAsgrAq0YW7LVHEWGeeabTrZvTv7953YQr5gbN6Oqrr5p3tbdtMzXqG1ZX140BSCbepKFRECG9I2Xs+B3E2/XqOe3bG9tIwjBCRTxVch/5IDpIiOKOHm0+A4E2y6R4baC3h5TFTFVSlnJYSFGUcxIpCs0AekNBZ86tQ96ywEnQngEDnIsuMgs8bPTi4EHzVPDZZ80b2/SfxupMkXNECwPGRbIFK3ZJUsK0gIrlyxtjiB9B+C024lxQg99BfK7p8HEEkSYhKrtli/PWW84jj5iHEIKogmaDQnbPqojaa1Nlb43VHrUkR4FUILftVQDUo0ks7RjGs892Ix80ifpNm5y77nI++MBJSzPtsQM6lT02VsHYvUkiBUxlbgkgPbgHJwm/u3RxzjnHyBBribjwZXw2BhBpEq5bZ359h1O3bJnZtPOq9TVE0CUYuC7EJpynIJ2QGuXQJ3ZBxR49nPPPN2wEX35pfrKUmOiqIMs/UaVtX0yAWDRlJMYuUUhuJO8MIp+qVc3jjQYNzGMnDCNsbN7cPaR4I6IkPHDA+e9/zSNBqKjboUwqSfMXho5JdWwZKno7IB1STg17ZRVPPdX8HGHpUvNGAd3mQOliTDqihQTDlwBJQNOXI1kgPagICVnO2rRxb6jC0uKKyJFw/35n+nTzSPDbb90aZhEXhegiPAzMDyIVELXERq8a4UrFxxsvNDPTVIq3auYD2LUM6UluuWXILlhXu7a5ldqxo7mRQxlTiatf/G6oRoKEXBEbOG2aM2GCedKNNjMlUv0cUxVxWGUClmY5uofOqc/R0+0oAXITISkgOgqssF5/geVMN05JOKjdupmEhYyLcy1q8UAkSJiaaoLAl15yVq924yivokeVKtMrdcwWREWVAT0H0dbtKASkgnIkRHf48NG7OBbwsFo1Yw+bNjX3b047zYSOxePBRnhJyLX27nU++cTc0li1yq1kVmRMolmVRUL6qdAFNWJRFxVFSx+FBMuW1lzmOsdTIgHb2KSJiRVbtzY3VHFWK1RwRR2jCCMJuVBionk5+733zCsmerYG5HjkOR/RCTosHVICRaXnUQWWMyTJ+oVVZPbzBK7pJZeYpJcKYxThIiFX2b7defRR58MPzSdxkTs1dkVUKnJQ532cMOSgogYKFBGmFMMCCZcqZe6dio09epinGjF35yYsJGSd27bNfA/3qafMLRk5b4iehVAG0FflYg7IhjJASIUkpBxOflyc+f3aWWc511xj3u+NrVgx9CTE7Vy92nnzTXMnBipyOSROgoSU8/NDfBRPoBi6eSMeSjnJpTZ4sGee6Vx9tbltAydj5dMboSdhUpJ5M/vtt81/4YNyloF2zfPhw0LqARSqCKiKFmtqoGirVoaE3bubvHJl95VU2hdZhJ6E48YZEm7Z4nqeuqvhM9DHcYGeQC2xC1WxhhEVIlCEeE2amKf8+kEjm0pF8LfFoSRhRobz9dfOzTcffcGSHAnaKNyHj8LAUhEekiwIFKEcqVw594fF5A0auGzEQqJsRQGhJOGCBc7DD5s3Y/Q0AjnKBnrl6MPHcYHaSH9IJUqYFzxyrOOQTWwk1a3rspFUPfAREyga3WwMGQkR0wsvOA8+aBxRLiEJUrBOhQ8fJwCrSPnd0sNTLXvkZ8SdO5t3xM84w9zFoZ54MioRGhJi+tauNR/DnTrVrdGznRxPgXz4OAFAwpIljUahTlCRPE/fimbly5vvfdWsab4h1KOH+ypc9FExNCTE+r32mvmN0oYNZlNSQ1gkHz6CApQKJxNGkcswipN56jMhYtOm7l2cDh3cL4vrDcQoQGhI+NVXxhH99ltzbwZo7fGjQR8hgmUjSWzMzzxiPzt1cnr3dvr0Mc4qPmoUIAQkRAovvWQ+/bBnjxEEKxYCQihcKBSE9+HD4qTAg0SoqFuAAG3MbR7ZW6mSc+utzogR5kljpBGCR5ybNjk//WS+gyQGyhGl7DPQR6iBjh0+bH5sjfpRYBPTBy2Vwz3bDAsxd655eAZFI40QkJCA0I4NEjJgn34+wg/W/aws91+VAOuyopPC0qXmo5WxScL09KNjQxAkO3g7fh8+wgPZALRRAREaiD2USaRy3bposBDBZgWUq1bNfIJFY2OToZJDQrkElpDWN/DhI6RAFaWHCous4lE+dMjYjEgj2CSEXbVqOX37mi9qye55x08NJLRstIT04SNssPqGs1q5cjQYgxAQAEvYv78zcqRz7rnmHSL9cxUYqIjZvnME/SwPLRt98+gjdJB2oYrYRsoUKlaMhn9fc8o999zjFoMFuAQPO3QwX3plhHBv714zZisCkvXR1R4SspeCkhpHgbPuI6YgDbR6VaWK0dKuXd3NyCFk744C7N6ePeZm6cqVzuLF5mbUsmXmA4diILkF0sESyhjSHyWtWDb58PH7wXJvVatCBfMDg+HDjdZFFKEkoQWx744dboKQUJG0fr1LRRJCsRAVlay8ciQfPk4ArPUiISpHjoJ9+qnTs6e5SRFRhIWEXlg2btpkqCjzuG/fUR/VQuYRSZFLcKoksUlLDmEvYFOj0C4fPvIE6iGFkS7VrGm+f9urlylHFGEnoQXmcedOl5A//eSaRz3ll4X0mkdkhwQBvaXMekZOGxL1Wsm8Lq5o6RPShxeoCpqj5R60a2d+6DNwoKtakUPkSOiFZePmza5tXL7cxJOiWQ7zaDsMD21ZNhOoUoljvUz24cO+RAnatzcx4bnnGuWJKKKDhBYHD7psJK1a5ZrHNWtcqSG+rKxAu2PZ6AUkVEKyhwP/4RAqRtUYfUQK6AxagS5JnRo0MF8/6tbNmMeIIspI6EVqqsvGLVuMv7phgzGYMGr/fvMd4a1bjexKlTLM1A+mckNUROIc5cMHJEQlAPpAoU4d5847neuui/gPmqKYhBaZmc6uXSaHdTATNhI6QshDh4w0qaGM70pKSXH/z6EFcuconBBaKmj0rWJxhoye1CA+3rnhBue228xj7YiiKJDQiwCRsn/99SRczd27jUzLljXcI4bcuNF83nvbNvOt4RUrjv7zbYA9JLH4wUl5I0yDfBIfxQroAEkkLFHC/KSQVLOmuzdCKGIk/OWXX/bv33/SSSeVKVOGnp9yyil/gIcilZwN7CQx5Oefm0dA8BBa6ndlgqICcpWpFyeL1krk48TAjEtJREI059JLzXdYUImIItpJ+Ouvv2ZkZKSlpR06dOjkk0+eP39+UlISZeiXkJDQpEmT5s2bx8XFQUVqgDkGEeOazptnvnr63XfGKuqFVS8bmQmxkWR5qOQjhsG828UXS3jRRc7EiRH/cX3UkfDnn3+GbODAgQObNm1KTExcunQp1m/VqlUrV64sUaLEjh07oGX58uVr1apVOwB4KNSpU6dUqVIuFTMy3J8XyzZCxaVLjeNqIQaSgGWvT8XYhhZfJhoSgrPOMh9DOvPMyBrDKCLh4cOHN2zYkJqaWqFChS1btsC97wPABYWQGEO8UAyjGlNWz7GBcA8qkrds2bJLly4tWrSoV6+eS0WADdy0yQSKCxYYKq5d6yQnm3iSmRDgIXNDkihEQiUfMQbmGsWwjk/9+ubf9WEPS5d2G0QCUUFCrF96evp33333zjvvrFu3jjJkS05O3rNnDwV6CCzrKJCr7AX11apVa9OmDTzs379/69aty5Ur5+4DyP3QIcPG+fOdOXOcH34w78op2WePQGzkElA3CiTjI/jQ/Go1xxEdM8Z87imir49GnoS4msuXL38vgJ07d2Lx6BJ2DGaqAewS8WyZveTwkzbWNgIqMYx4qs2aNbvsssv69u1LAQ/W3Q2wfrip4t6SJc6PP5qvM2Ib4aee7AOupXmy3qmPWIIlITNbtapz/fXmaWFEf1UYgt8T/hZAuRkzZrz44ovvv//+tm3bMjMztShArQDdTlJ8KKiGvTioIioRYMmSJdlFJTWAAw8ePJiSkoJF3bdvH34p5lFHGdCyVCnzGxak37Ch+SQzUUGbNmZFTEszt3PEOhE7cFofsQaUgaS1lbxdO/O/uCtG9F8dSnfDD4wY3ubTTz+N91i6dOmjPAmATagFzYQAB4+SULnAXnjIGSAkUDPtwip27Nhx4sSJRJhczr1wbuzZk71wYfbDD2c3aACzmRyT8H5PPtlskiir0k8xkJjNP/zBnVOmeODA7O3bXU2IECJjCTGAy5Ytmzx58vPPP7969eqsI1FZgGUGUIucGhsTUlaeA1RiGK1fylG2GTXbt29fv349wWHdunVxU1WfE3Fx5rs4Z5xh/l2B3gFIT3eNISCOpyd5XdpHkQSzqWWaOcXZIVq54grjHEUOESAhDJw+ffpLL7309ttv44JCIXeHcQBdiweRoJB4VXhwFIdjAEVg1RBzQkXq69SpAw/trpxgPvBR69Uz5a1bjXeqsMFHjAEFUKDB5JJwRJn0li0j+JQi3CSEV4sWLXrwwQfhIfTw0kxupxgouDt+CwLMdeNJNjkJJN+5c+eKFSsIOBs2bFipUiXtygNMQ40a5r+FwMYtW8wLN7YPOsTnZGwAEoqBQDfkqMEYlCwZkWcVYSVheno6ZCAOnDVrVsaRnz6IMJgvGCgKUXliDPSCc3JCleHhvn371q1bRxm/tCocyw8cwtLIulimjHm0uGuXWw8J86Ouj6IFzSMLrnTs0CEnKcl8BXjNGlPYvNl8l4xdBC9H9CfUCB8JYd3MmTMfeOABcj15pzJAQBMBUrYM/P3gnNAYEurMAh3YuHEj0WOzZs3Kli1rKZoTdKxUKWMMiVRXrTJ+qQW7fvfq4CNaYFfVn382r1L99JN5gPzjj2bS1641L1pRefBgGMxj+Ej4008/Pfroo9988w32EIbAEwVvIkyw6OcF59SF3G3HOXDgwJo1a3bt2lW5cuXq1avTAXdHbhCpJyQYBiYmml9RwT3OE66l0UfIwWzaxOSifnq7eN8+Yw8XLjQvHq9c6ZrHTZuMeQShMY/hICHe4Pr166dMmTJt2jTcQmoghu5/iidALUMEa/S4HPYwKSmJ+LBBgwY1a9b0UvQYUB8fbz5evGCB+Q2x1gg7Zz5iAzhKcXHG1sljEhsJDiEkbqo1j+gAscm2beZWKl4ShjGoVAwHCbds2fJ2AMnJyfANSgBICDlDYQBzA6ZxRfGNDsDAlJSUuLi4tm3bliH2yw8IumxZMxlLlpif84t7vjGMGYhyWD9yphWCQUicI63LVJJkHpl9vFPUYPZsYyqrVzfRSvA0IeQkROlfeeWVSZMmrV27lniMGsVp3icT4YE1enRp//79ixYtwi+tX79+pUqVvKHjMWCNrFTJuCIECTilOgONw7J2+AgTYCPaCNl0p5T5xdwx9aKZNY/Eh7t2md+O06xhQ8PDICG0JMTQwb2bb76ZHNZBA9Qdo0Q51C5onpA91KVZERITE7OysvBLq1atyi61yQlISHy4bJl5aMGB8FDJR0xC1i8ry7COWZZ5RDeYeiWs4o8/OtOnm1gRWsLYKlXcY08UoSUhBmfy5MmEgmIgig5gZni80BwQ9xSLahMGpqamlixZslmzZhXye2eCCcD9WLTI3DRjCQycJIiuiI8oBRNtzSNldEZTD6jfudPcsVu50vio69ebB1qKLU9IMUJLwqSkpPHjx+sBnRiI6keEgQJXB3TDbqalpe3cubNKlSpNmjQpld9Xt5A+FEXchOZeEtpZ8RHbYKKZcRsuChkZ5qHi8uXmVurWrYaZlSuf2O3TEJIwMzMTG/jiiy/aUBBEyhG1kBkkV4H+7NixY+bMmRRq1qyZd3xIDQHAoUPmXhneiICsvaujj9gGloPEpOfmGIqRnGys4oYNRh9KlzaGMbcW5Y9QkRAGzp0794UXXlizZg2baDz2h1yEjAbIHmpFoFebN2+m3LRpU3gY2H8sMJL4G4xFcTmAgZzBJ2FxA/NOIla0NEMH4OGOHebGATxkmY6PNyFMbrrmg1CRcMuWLa+//vqMGTPw99jEvMDAiJtBC3XD+qWAfm7fvr106dJt2rTJ2y+FnOnpxv3Qa02g0FL2ESNg3q0Ci40kC3YRK65aZRZryihMuXKFUZKQkJCob9asWS+//HJycjLEo+YPf/gDeh8lDBTojOyzNunnvn37du/enZCQULdu3ZIE2TnAysfyBgMXLzbGEOnjn1AZTYPyEQ4w495k2UgZR+/AAfNkf94846NCwvr1j8vD4JMQbU5KSpoyZcqXX3556NAhFB1AQly+qCKhQN+w0uoYawcGHP+5TJkyjRo1isP/9AIpV6hgeIhHitehW9gAEUffuHyEHEy6EkAHxDSrCTiARImzZ5v76izZes8GJzYvBJ+EelH7/fffxwyyiamRlkfwpuhx4Y0PMYbEh+3atatTp47XXzWAdVWqmHcmEhOPOqWiopW+j2II6TZukTdQZJnes8d4p2gLESM8rFbN5LkQfBLu3Llz8uTJ3333XXp6OnamRIkSKHf03I/JDbpHP+GbtYcHDhzYs2cPfmkeL3kjZcJuLCEuhz4IAAnFQx/FGXZF1sItlSCHnykp7n/7a9rUqV3bPOo4FsfxVn8r8EVTU1MXLFhAzibKTR7NNlCghzAQHtJhCpDws88+e/zxx3/44YfDuhfqBXI8/3xDRSHqR+cjTEATsH7koqJ1UKnEO12wwJk1y721fiyCTEKs39KlS/fu3Svzomdu0U9CQCfVYS0c+/fvnzFjxn//+9/VWLwcwLlv187p2tXI2q5/gaN8FHeIcpaKclClJyVLmp8Oe/9P0RGEhIRYEspoM5CPF+Wgk0A3crVwAEYxderUN998E9dUNS6Qad265t0I750bn4Q+LNB5r1WUbhCRYRvtyx4eBJmEGRkZ+tcRlOXdFQkzKFgeWr+UNWXatGnvvPMOtl1tXJQt67626+Wez8PCw8oqhoUmKhIByg6hWqzarN25zFIwSZiZmbl+/frNmzdTCFhBgyJEQgDx6DAkFA8JCFetWjVp0qSvv/4aQrqNQEaG06GDeRprBeozMDeQiZICpBxlPA6VUVOSKnWUyjYVXTCQwLJuUKqUeUTB2p1rRMEkIWq6ZMkSmUHLQNRae4sK6DP2UCQE8HDRokWTJ08mPzoW3eCyAlV9URtpMGHZIl4BRKSISEERyZJNHAP2KJWJmoi3dUiZMkZlaUmud8R0HrW0R0U/5JECRoQZ9P7jkyMIMgmXLVvmDQiLlhm0sPZQmwcPHvz8889ffPHF1NRUl4eoBTKVPqnGyroYwnJDPBFzEAiSIccUUCARFJHYJKdeSTVKhw4ZHaXy8GHja1ADyDmW00JgGROuwiVESwrRLHb1U2Ag+fxf7qCREOuxb9++WCIhuewhBWLdWbNmTZ06Vd/IMWrRoIHRFQ2QPJpVIURgyKKcEmWRDW0TzSiQU0OughKwZXuUBKhD1ICyTVSKw9QDKTeElHUVG0lRBcmHvmlEjKJ+fXM3IReC1m/dkoGBqK8YKFV2dxc1qPOMQjyknJKS8uqrr86ePRvDaFqwZteu7eoEiDYNCBGkWCSr+lrpkYNoptwrFhIWrFw50zIuznzWFa+MM6CO9eqZ34ixnOkptn4ERMsct511Wi8nWf5IcJK9nNb2JKpmQYKit4C+McxatcwAcyFojxBw1Z566qkJEybom/N6YzuPJ91FCiIhAxFKly49YMCAu+++u2XLluaZz223OR9+aFREqoaiFNlFp1BApRgmuYUoB5SrAfyEYJUrGy5lZpovKcMrrJZuDNKGvdWrm2Y0qFnT0GnPHuOL0njrVvMdl927zZcjqElPN/9fmWMJF9kkCZzEq7eSP4lKuwp4G0QEkoa6xBAGDnRGj3batnX3ehA0Eu7atevOO+986623MIYo7ilh/Jha6GAMeoCHDERjqVy58pNPPnn55ZeX+Pnnk/r1c775xqzH0gAaFPHx5gvpEzmJMVott2SQtmHlGjc2/2qua1dj1ho2dDp3Nu+7s6tKFdMGskHI+HjDNxgItdglz0I027nTmI4KFczLlpShK42XLzevQc+bZ04FdSEtXJVrSi5TI9hOskv9jCDoBr2lh8KgQc4DDziNGrmbHgSHhCjo+vXrR48e/fbbb3NCFDdqfzbxWyESUmCMMoZ9+vS57777WiUknHzzzc4bbxglkLgpMN6iP+RjIJ0mCXaAdpgIB16RoBzcO+ss8/+tIA9rP16oPfC3AgrpulyIMu4cgIQrVpiXTvThM8qQc82aozzU5cjVPrIzom7QefW/Wzfz2pp6eCyC9gJ3cnLyrFmzVq1aRTlgP4JmYyMO8ZCcMuadmLBGjRot69SJ27bNfHiL9ZtdSog7ZqARwbHAGuQqk+aUGmiGe8nSg25BvCuvdG64wend2zw+xY5BP3Zx+AlDV1dBHQCVKpnosV07p1Mnp1kz8z9eSQSWWF34Zv+hnSUeB0ZQCSEenVdnWJJYmwYMODoWD4JDQhQ0Kytr7ty5iYmJxIFWa2ODh4yC4QAZw/379zPYLl27Vs/IOGnRopNwsaQxknhsQMORGol7GprsW/v2Tq9ezlVXOXfdZd5lv+ACQ0WiO+iXl5KFBNjeGjVMwNmxo9OqlbnBs327eSnMWkVAZ0gMISJAVkCiI+GOduniVuYAWhUUZGZmEhPaH8KWKFECrVW5qENrih0Rm+XLl3/55Zf3z5z5a6dO5t++IkZWHAonn2zKRT0xllNOMcPRfykmqb5WreyuXbPvuCP7k0+y16zJTk/PLuD/H4cfhw5lT5yY3bNndoUKR8fCjDAKcjuK8CQuV6LE0X8JTProI0jidvVYBI0nGMB69eodCty/Qk0xGuTaVdSBmBgOgIQy74S7H3/00Xoik86dj1l6QZEeNZ2X9QCMy/qfmMRGjZzhw51Jk5yxY50+fYxbWOa3fVMs5ChZ0tyBvOUWY5xr1XL9YQ1B4wrz1Hg9iDp1zO1inIi8EDQSli1bFmNI7m7HHOCeTCI5a83iJUvmrlmTiS7aHxYi7qJu/KWswCoQqlylivE2//535y9/cZo0MdFgVHHPC+YC3/j++01v8f3wyxiRBiIGho2H9ooCi4L3f+wdi6ApDaq5efNm/Q6dMkBrtSs2IHvIuChT2Lhx41fffbc5Li4bvbTePwjbNAcXdFs2kFHAQFvZurUzbJjz6KPO4MHmB1zRPzrsISvjn/9sQtYWLUyHNSKSbGPYhiBhCixbdMwK9lgEjYQYhzp16hw8eBA1RUfFQKlszMC7rOCRzpo1a1uNGj937Jit1yDY62lQlCDVJNF/2UDKpUsbY3LHHeadhI4djZEpQrNZs6bTv79ZOBISjtp2EmWNNNSQMG05MzO/F0dB0B5REBPu3Lnzhx9+2L17t7GDAcBGd3esQOMSG0uXLl21evUu7duXWrDAvOQhubPmWekXCdBt+qzOa74w7DVqGL9uxAiTV6xo9hYaTPqePXuITSijDOnp6SVKlNBzY1ZqCuT79+/PyMigDd7Tjh07aLl9+/bExETqiWjQJSQsUQdO+dvBgRUqmEWkalVn/nzzOjhggCJkGCaIDnAtEiLFBjZr5vTsaV7NywtBcxoR3Lvvvvvggw8uXbqUc+o7Eb9Ezdd+gwViQqBxoVuX9O9/d58+p77xximzZmm3kX6OWzXRDHorBtJnZkqT1bixc9llJuHOlSsXaJcv9EpGVlaWiBcXFzd37tz169cjogMHDlBTtSorVXU4VqpUqVq1alG5b98+ZEhh69atqA2cTEpK4iS0LFOmTMmSJVu2bNk2gJo1a0Jawb3eb8WGDcaXfvdd8wADiBsQww42dMCV+Dnw7w0JTQcOdG6/3TzVzAvBjNy++eabkSNHLlu2jInxKqu7O1aAlkjzAIry0G239Xz99bgvvzR6LBJqjqMf0kh1mKTNOnWMARwyxNgQNvMCA4d1IDk5GXalpqauXr0ag4YpW7NmDWsThJQBpDE0Q1zly5fH9ME3qBgfH8+xGD0aoCGUMZ5oi/wmxFutWjUISd64ceM2bdqIkBzILpoFulBoHDpkLOHzzztTp7rvx3EGeStad0IHghSuyCUojBzp/O1vxknOC8Ek4bZt28aMGfPyyy9zTswgq5eU1d0dE2Bc0gNpTKVKlUbfccety5ef/OabZtlDj5lgkTCaB04/RTk6GRiIKbByn3qquZ9B0sc78gKkwof8+uuvZ8yYAZHgoW7IYdn0+xJmXJOOrHIUfisQL2wEmMQzzjija9eurVu3rly5sru7kMAXnTvXufNO8+l0DVbGP6TThGyx3llZ5kKE03ffbZ6dUM4LQf7uKGvht99+y/KG3FVzYtKPZjA0r1bVKl26d7NmJefNc0lIYgI02dEJ20mGYBmIy9Shg3PjjU6/fiYgzAssqZg7uDdp0qQnn3ySuGPlypVYQriXlpamQC7HdCMo1iwqJTRg6wX2uqUjq5sXeLP6FvO6deuwsQAFg/ZcDsNI9MhRbtMCgEFu1Mj8lk8fO5MBlBCO7W0wIWMr8TZoYF4watPGyDwvBJOELIdLlixZtGgRi6LECtx9MQQGJXVBt1huTm3btmOdOpW3bTMTjNzZxaijloRSvhzmGgaefrp5tnbJJfndBYWBsG7ChAmvvvrqV199tXfvXmrcffnjlFNO0X/1kNDIURIV7Ncl2VQNOQ6qfE42vXf1KHPFtWvXzpkz58cff4SNGOFy5crBfE7IUTpVQdDNyWXLzC85aKyZ0vBDAZFQaNrUufBC84I7lXkisHgFDQTlnTp10lcDEaUkrgvFDJjv0qVL21m/5pprkqdN+/Xss7NLlkTq5jWliLwnVcik17j0Ppo2y5bN7tcv+4MPstPS3FnMBThAqH/JJZfk8UlyDyQTclugMaRCH4CUwRbYSy7YMgUayMoRRiLnAuLAMmXK9OnT56mnnsJUuh0tAL/8kj1/fvZFF7kDJ9d7eVYyQUycvFSpoyc/88zsJUsKeMUvyCTEObn99tsRIjJCoBTIJbKYATrE9KvMYjxs2LD0jRuzBw06Ogf2rUtbE/FEZ0hQTm8zqm+Ua9fOvumm7Nmzsw8edKcwF9LT07E/1157rUiigecA9YI4hmkiN8w75RQdBWxLFY4LDuQ88FC3THVCd98R0Ia4sV+/fm+++ebq1atxwdxO54k9e7JHjDD0kEC8i1Fwk+QsEpYunX3xxdmJiW4f8kKQzRQia9SoEeslZc4ub6Hwci8SYETWE6tatWrz5s3Nm1xdupgbG4DByg8JnatzYqBjmBTrhaLQTNPw4cYL7drVeKT5YOPGjaj4xx9/LI1xa48gwC9jx2AIVFEDS1cdIgSamxoVjgvML/pDwJmRkYHbL07GxcVZYqsNbip9GzduHCbx66+/1v/DzBuVKpnHnrVqGTkUuhsnAolaoFCvnrlJkz+CTEJciGbNmsXHx0tGAKHbcmwAEqITKlerVq1NmzYlKlQwP66rWtVI3yKqRo0q0B8xEFBu3BhP2vwOEBXJL1YJALXWB51z84eZBbCCHD7oYQMr1KFDh8gpg8KzrgBwHmTOOQEnZAqAZSN7MYOvv/76gw8++Oyzzy5YsACT6B7pBcMnMOvQwWUImxJL0GeKE3JmO3AuWuA71UEmIRI555xzsA/IiLKdAMoqFHXIIxIJGRQjbdu2LYM171UiaIaZQ+fynGNV5q4PEbgQ3aZjSugH1mDIEOf6681tQ2lkPmAGGSMmDl65VUcg6wdoE6DbMXyj7N38neBUIiG5zqxLMwVSLer37NmD2/x0AJhEPS85Bow0Pt6sPnoDge6Jh8EF/eHMaAgnp1yypLkxm/8jHxDsHjgOsjjzzDPxS5EUm+QSU2yAiUcVVEY7W7VqhfFnsTEkxLuT2kn66D2JOSapTFI9NSqUCHxF0yufoMuKE3I5KZw2sdjDhjnXXWdW6AIvh2YT5KPQOIRulTmBgQwRBdqIge7uECNAQBPmZGZmaiLoBm6qdVB37NiBd/rYY4+RY70DB3lQo4b5RXKOrzYHl4eabp0Z4Gjoxxz5I/gkRCkxDkSGyIVNRKb62ADKh9qpjC/qmkHNIguefk4BUEo7cDsBtLQNrBJQYLEsdeSztoCzkQqctsKCk+hUWjjoQIsW5p1sSIg6qtv5IykpafLkyS+88MKSJUtUg6IzrWbIARdRzmGkppjriv8U6BXQorB7924WjuHDh99///3Lly+3i6YBQ+7e3Yw9MAQjfxLyxzZCFS2Ikv/xhJMvdAYrk5o1CzaDIPgkxHXp0KFDy5YtS5UqFZggYwmBu7sog1F4LSEkbNeunTTSfFhh926XRUwAJLSJ9irg0R0OfC8YGiup3rouHE4SV1UmMaMnLD0dy8mlExUrmh+89u1r3NECwaylpqZiTx555BFCLMJCzSDDR9fRe3QdaH51SPihq6sndEmzo35Sv2/fvrfeeotAcdOmTWrvokwZ89ROr93QeYSP44qpR0pIG8kjf5Im4rfKn5ZKnA1w/tq1jQNcIIJPQlC3bt3u3bsjCMrKEY2kU6TBHEvzKJctW5ZhYvCpNPuYsG3bjvlPAzRTYuA5CrYBU0WCpUpiI7kaSxtsOmFtsFfEExsw4LhxIM4eBuSZZ5554403du3axSaVTB/LKwXWIDQ+0DBawIxoXaCsZYLeUpOcnPzOO+9MnTp127ZtR/tcoYJz7rnmhjAitWAvc6fERCAxROQVPkmELBiSuWYQVKtmpJ3PG0gWQX5tTUAoBw4c+OKLL/TqDDXIRbpbdMFAMHp2shMSEi6++OKuXbsSkLhTmJxsXowqXdr4NrQJNDNTgp+D5SFiRImZRZyT+HgzSRhGLbeUbQKcjWPJ2dSk0kYMJFeBVDDUGOi0bDZo4IwaZb5Mkf/TCHDw4MHp06dPnDhx2rRpKSkp1DBw4+odMYBqFp2wK74t792796effsIpa9++vRYRI3NcxIQE81+s9Z+2xDoLynYKAGez9lBSDZzfzXOAvUyWPbZVK7PqkReIkJCQCSMmXrly5YYNGzRt1CCaIs3DgB6erCiIzWbNmg0ePLhx48bGEjIfcA8tJ+Jq29a8psQmlag7a2GvXs7QoeaLd126GA6cfbYpDBrkXHqp07y5eXgFG2nP5HFIwOwYULbaQKJMjV2MyRVeklOvKfeCswHqdWDZsua17CFDzKOUAoENxAv9/PPPd+7cqZHKtlA+akyiG1o1VKbP+KWsJlWqVGnYsKFeIzHSq1fPzBcrIysmJJT8qbfyB1b+YilipIGdgoBwckJ7LauZ9D/9yVylQISKGJmZmRMmTHj00UfxyBEEE4lorC9X5EDnMYNMrb1TDwOfeuqpqlWrat11kZZmogtm4sAB5/vvnfXrjdHr3t38PohlGMJkZprpgZyUdQ+dMvHk7NnmTf/ERDN/u3Y5W7Y4RDKcmcYioQVz7L0iqiP2ciDWmPaSMJeTPrEJA4mC7rrLuKPeY49FVlbWihUrXnjhhddee401VONiyMydXXqKxPSJhADFA/Q5Li6O+Oj2228/55xzjOciMJV79jj79pl82TLzKeGtW83cUY9Hs3atO0E5gFiYApKWP8Qulnp3IXnKzMuIEc4jj7gLYv4IFQkZPG7AiBEjZs+eTVlKHJBJcJ7ehhnSRXquuzKEgqNGjRo+fLgxg/kBHtK4zJH/s1dI4NMy/Rs2GEbhLy1fbvRj8+ZjlmQhQBJ3U3MP1B+ZLJEQkhP/jBtn1oL8waL5/fffv/TSS++99156ejrTxJCZNaBZc9sVHQRo6PKQUVSqVGnAgAF33XVXkyZN2HQbCQiWdRDKsXLBwO3bzae+k5LMmrhmjZmOHLd2LGAXAidH+GIjQFaUuQRuzu23m69jHRcoVoiQmpo6btw4fX+NYaOvLEI5x19EQOdlCbXZr1+/OXPmuOMMEbKysrdsyV68OPuLL7L/8x/z0mOPHtnx8dllymSXK2feSGTuciS9sliypPuCKDUUTjvNHL5vn3vavICHMn/+/MsvvxxN1QCZJsbrHXKRQw6VI69QocL48ePxTt1hHxfr12fPnGm+ZTp6tHk3uH1787K7V+A2IfkSJTC45sVUytSwefXV2QsXuqcqECGJCQX8bzycVatWbd26lStRgyC0OKlBUYG6LXlpc+jQob1799b6EiqwxBK/1axpbnA3a+b+l5XzzjO/uyWeqVLFPHPXvxPDAQ7YZ2MVlZBwoKvGGf7jH03wmZBAv01NLhw8eHDhwoW41p9++qn73xcDiw7DjPLbMIWBd+4OHz68Y8eO2rVr169f/6hTWgCQXsOG5psUHToY+bdrZ5JudeKnBD6i40Iyt8YQ4AFdf73xPgq8DSaEkIQMnmiYeSXWZ6atBpOrXCRAh4XAPJqHwkzh2LFjifLdFmFAqVLmuVbduuaWT4sWJtzv29fcZ0cn4CcEK1fOKAEaoLAQiHLEojffbELB/MOSJUuWvPzyyx999NGePXs0UjGQwRa55TJPMGUqMKK0tDQMQ9OmTWvVqsUYVX98QCRWw5YtnTPPNPJnIlgEK1Y0TztYK5G5d7XitKyMbduaO2HMVyEQQhKCkiVLwsMNGzYQH7KJFAKz7LoHgSZRDTrJFJIb/gWUu3LlyldfffVll12Gq6Y2YQX6hPll+lmk9QyKdbpnTzPZrNDMPQs8azCagVpgKi+6yPxSPv83NrZv3/70009PmzaN2EGxkxhoAqmYYKBmTTykLGOI192iRYvC/jA/B5Bqq1ZmBTznHENIljmmgyUS4QMCSzY7dTJ3v3v0MJNVCITqxowFET9zPGrUqM2bN7OpaWaCjVJHvT2kq8yfbuoCyr169br33nu74hlGFZj7tDSTtm41/1VzxQrz5gD87N3b5Pl8fX3v3r2vv/763/72N8s3MdDeC40NSOUYkbxrNmHgM88806NHj0I5pflB/qdcUN0/S0w09bhIRBCInbWvkBF1QLtCi6SkpOHDh+v3TZIIZoSC24OoBN2DckySFlE2sept2rSZNGkS/ow7sCjEoUPZu3ebOzopKdmpqebuTj44cODA1KlTUUQ7Xs0LuWpiBppK79Di4uKuuOKKlStXurL4/Th82PyzF9K+fQX8PDo/hIOEaC0hB/MtFw6hSCIUJJQoBNNGD8VAUK5cuXPPPZfYCbfNHVVRBrbuww8/vPDCC+3tUDGQ8UbzpPweaIB2dIT048ePP84v8cOFwpnL3wfsyemnn96vXz+uhxTI8X8031YoUQX6BijQVXI6eeqppw4ZMgSt/c3f24tKZGRkzJgx4+uvv9btUAbIeItKjHBikC/KMKVyW7ZsYfiJiYnREPqGg4QAX/Sss85q27atRMBMIxQrkegB/QFioEJBChUqVBg2bBiLSLVq1aKtwycAzCCeGPoHFRkgI8JKoIsiodsoFsEANbPg8OHDkHD69Onpen00oggTCZnmdu3a3XLLLa1bt8YwMtmCFUqUQBpJgQkjp3v16tXDBg4cOBDPLQYYCCDh6tWrN23ahPzZVGig8cY2GK94yDxS3rlz53/+8x/c8oiPPXwcKFOmTO/evb32REqABkSJcjM9dIZeYQOZGHqVkJDwxz/+8S9/+QuW3G1U9AEJV61ahT+mTdZEBqu5iG0wRsC0Cox669atc+fORRSRHX5YDVGNGjXQ6c6dO1trA7QyCWoWZujSloF0SfVoZ48ePa688soWLVpEqm9BB6NLSUnZsGFDamqqahg1tFQ55sHwmWLdoQGZmZnz589fvnx5Vpbnh6BhR1hJyOCbNWt23XXXtW/fHqWnBolENjjUdekAYIZsHIjzSRB71VVX6V+RBNrGAuDbmjVrrBlkRuyQiwk0y1bfCI9nz54NG7UZEYQ7JCtbtmyfPn3GjBnTqVMn/cgSDQBwQA3CDCZD6yJzA+gJ5SpVqgwaNOixxx7r1q0b9tBtGhNQQKgXJ4BIqHIxgfSNWQZsYgPnzJmDf669EUEEVB/D0rNnzwEDBjRs2BDuIRFpP35R2KioOeCKAC0EgakxBgGfeeDAgTfddBM2sPzxfgJb5HD48GFIaC0hwy8+vqiFnWuAQDZu3Jjze1DhRWTsD8oNCfv371+hQgXIgESgAVQ0TmGIXdMA+9xXKCjoupoSLHNCQgIu6G233damTRsUVIfEDBhsYmIiDNRPkyVqKrW3+EDTreFTRiDEyXl/LzgsiJgT2KhRo6uvvrpfv36UVYk4AJuCKoMInRPRwy7KKB/giqqsVq1a9+7dR40aNXToUALXwBExiG3btu3cudOKAjug+mIFhi9N0+yT63tI2ht+RIaEQK9ijh49+tprr61Vq5bMDkaJnDJARQINfxekbeScDWD92EToop9A1NexY8fhw4c/+OCDMLBp06ZBuXQUAqkyWLTNDrAY+qJA8y7Pi03UIy0tDS+dSjUIMyKsbdjDIUOG9O3bV6+DSTQwhDICEoVOAJZ7wFKaMifX+QOzYKLQ+Pj488477/YAOnfuXKlSpRi7E+MFY8ffLl26tCRMLhFpb7ECs6+xA+kDPIyUXxBhEmKaOnXqdMMNNwwePLh27dqwgkokgrpQYBMZBRoWFhIrBViXH/eohGn16tXr0aPH9ddff999951//vlEpzpDDANRMPb69eu728UYiAJNkKpQ2Lx5M3Gy1qbwI7Q/6i0M4APuaNu2bcuUKbNv3z4iFnwk5AJtkBFEooFE5h6QF2ggiHXkqrTEA2ySx8XF1ahRA9t7xRVX6Oe5derUwTjoPLENSeCjjz7C9WJTsqJAZWB/MQIDF6QYqFnLli3PPfdcd3d4EXkSArQBQ9SgQQOcUtakrVu3ql7KwV54CHnsAz3tBQExuvGe7J7qORDYltQTgpYtW7ZLly4YPazuiBEjcD4bN25cqlQpe1RxAEKYOXMmJJTrVazGngOMHeWRqqA8rVq16tWrFwV3dxgRFSQU4CGCwCRS3rt3b2ZmpuwYORpjlQbBwUkVRDxDxMCKbpzOAChzIJXspQ2Obvv27a+66qqhQ4cOHDgQL7R8+fKwWkcVKyBV8M033xwIfBxdQFbu7uIEBo56GAoGdKxNmzas0RF5MhxFJAQQBuewRYsWMIRAefv27V79gF3y2hGfrbFCVMHuxcRVq1YN+g0ZMqR///54nhdeeGGjRo0qVqxo9K740U9g4Dt27Fi8eLHeWpYoJLdiCPRNGoUEiIZwR3N+zTksiC4SAkRQqVKlhgEQvGEeIWRWVpb99LWhWsDVJLeb0iRkSnSHnWzatClu58UXXzxy5Ei4161bt7p163IeGugkxRas/WDRokXr1q2TcyGdQ3qB/cUIlmyMnUgnPj4edzQid62idxVkidLnEtesWUMMs2HDhqSkpI0bN+7atUt9FvEooFWye/CWlQxvE+ezZs2atWrVYnnziZcDLGf/+c9/xo4dq/+hKfnYRa1YgbEzasaOChEHjR49mmgl/AoT1a4Iffv5CJKTkxcuXPjtt9/Onz+feIbABvOI3cPDLFeuHMazb9++OJ/Vq1dv0KBBcbvd8puAML/66qtrr70Wj5SFDCAr+fNui2IDkVBgBb/vvvsGDBjAwu3uDheKTDyAlmRkZGAbsYSYx82bN+N2wkBcVlxNcpwrHE6fe4XBvHnzWPVnzZpFWTxEDTAI2ltMoIEDVIu8fPnyL7zwwqWXXopeuS3ChsAqUJTAQo4fBXCrsIdawn38JmzatGnYsGGonbSQiKgYOu0MnFHruRcgeHn88cddAYUXRc9uIDi0B5QsWdJ3O08MxM8XXHABaofyoQSsa1RS1t5iAgauIVshROqdDV+DiyNYvzp06HDmmWfKBUULBe0tVjCWKBCRHTx4sHXr1iqHGT4JfwNSUlImTJjwyCOPPPHEE99++619alLkAN/q1KmDztnHYihfgIbFiIcMVpTT2FmY7CfIwg164MMLjAOhJs6Jux3A4cOHP/nkk5YtW7pSC7zyikf3zTff6OZ+UQQj6tixo4IivHoKxcq3Z7BMIqPWZpcuXWbNmuWKJrzwLeEx2L1799tvvz127NhXXnllx44dbm3gc0APP/yw3nsWoOXnn39+8803L1++HDm6tQHg2Ozfv//AgQNZgX8F4dZGH9q2bYtTKi3UUoJeFh9jyGD1iEKbDRs2jNjn1emEDyEjI+Pxxx9PSEhgevBMxo8fr3oM4xVXXIG74orsWFx11VU7d+5US5g5ffr0wYMHXxzAX/7yl8cee2zhwoXRaS3T09Pfe+89a96hH0oJKMQ8FRkgZjDO8x88R48evXfvXlc04UVxIWFaWlpycrLetskPP/zwQ5MmTTQlTBLsohKz9sADD3iVkvWSgMrdCHzUeNy4cSg0po9wMfdqilpfcskl+H76T6lecMgHH3xw77333nrrrf/3f//38ccfY4rdfWFBamoqZr9KlSoaIKsPhpEOq+cxDEbKqmoX1rp1606cONEVSthRLEiI9rPOnXfeeddcc8369evd2lx44oknSh35xGiFChWee+45LNicOXPatGmjSlCjRo177rnn1VdfrXTk/xmBdu3aQWDa16tXz606Fkw5Bue///2vN9TE3b3vvvssAchr1ap10003FbxSBB30vF+/fvaZIQxUlKiexyoYJnNtA8Jzzz135syZrkTCjmJBwhkzZsjxgAxjxozBaXR3ePDLL794//Vnjx491qxZA3vvvvtuy0wAl/r373/hhReWK1fOrQrc8b/sssuqV6/ubucF1Lp27dqfffaZXFOCxn/+85+5zSan4opYSPUqDMDZfuedd0477TSEQwfoJ6qJq8ZmDFORMSJqO8Abb7wxKSnJlUjYUSxISGAmWYMLLrggt+sPMd5++207JaVLl8axhKurVq06/fTTVVkwvPoK4QkIb7/9dvJGjRrZ5RacccYZa9eu5Yqvvfaa15Z6gVF6+OGH9S+ThEOHDmE2ly5dum3btsKElywoHAIK+TrR1q1b77///ooVK3J1BgIgYQzzkHExOjsvBBRPPvmkK4tIoFiQ8Nlnn5W4AaTKveZt2bIFwrgtAuZu3rx51MNMqWbByKGsZ5999sqVKyHAnj17vvjii/PPP9/d4Ticjc5gfLClblXA9cXwlvX8f/O2bdviJapvgLXglltuoc2QIUOgYsE8ZIl59913//rXv44aNeq7774rJA+XLVs2dOhQLLMGQh6rfqmGpiVGNXhA06dPdwURCRQLEn7yyScSN6hTpw6bXj3GYrAQeu0S6itDhGdYsBZi9Lp37967d2/vG0/Ellb1KSxfvjwhIUG7ONvAgQO//PJLSzkU/brrroNmI0eOtH4vKsKldQYwfvx4LdvoDc6wfo+bG1xr3bp1I0aMgNVcCNSvXx8H2N1dIDD78+fPHzZsGHGp1hTARekJBfUqNqBxwUONixxR5yfS8KBYkHDnzp3opeYADbv66qu9//UaSuA0ai+oWrXqhg0bqIeogwYNcmsDYPKaNGlCEH/rrbfCtPfffx//kJbPPfecN0T88ccfAyc+in/961/2RlyNGjU6d+6sMmjYsCEdoM327du5nF2e4c++fft0+B133GGZACvuvfdePYH04ueff/72229ZDuyFBJb5QmoY412wYME111wjDutwLscJRUvVFGkwihwWvkqVKosWLcrzNkHYUCxIiInA/li5t2/fHnfR3ZedDSet6mPQiOVkJ3fv3l2zZk3VA9oMGDBg7ty5KSkpOd6nyUFCzJq74wjmzJnToEED7UUJvDwZPHgwXitt6OSECROsQeZyU6ZMkUV9/vnnOUr1oHr16ni52iXQYS7Rrl273FTB5L711ltuu+MhPT195syZffv2tQKxWhsbPGQUDEfCZDgwcPjw4blXtDCjWJAQvPnmm9YYIvpPP/1U9URQmD7Vg169elkKESd41Q7Pc/LkydqVA14SQrDczxhyxJxePProo26j7OwlS5Z4H4dABlla4kOvt0yvsKVEcdapXrNmzTnnnOPtrS2jdmPGjFGzwgCbgP98ww034JfKYgApLtA5iygYiNcRxchfcMEFn3/+uTvyyMFd8GIeWInmzZurjImbN28ehYMHDz700EP232Vi92666Sb9IwpWx2nTpiEg7QKZmZlvvPEGLqK7nQ9q166d+9/6QlGvUfWiVatWbslxTj311KFDh0pFAJwkTqPA8oETq0pAr/B477nnHv2Hs/379+uFcttb1gv78INKTsJao838YI9FTekGwSG+A2PRLthOQWbEdq9oQUuJHQtglWGMHTp00GYEUVxIiLlr2rSpyszEjBkzcCnXrl2LSVQlgKWdOnWSkm3atAlFV70Fq+bEiRMzMjLc7SPw6mV+Omq1PAfsPRuAllx++eXlj3x1D+dQ769ybI6fuqFJH3/88bPPPsuiMHv2bOw8w9EuWt544409evRQTzgWm4lx0978kKPbrVu3HjJkyGWXXYbc4B4nwfsFNBPcdkUB6jCjoCwfnnK1atWIn/E1vH5QpFBcSIgxwcTZYAzjsGHDhs8++2zdunWqAXiMrI4qY4XWr1+vsgWKjs156aWXoIdbFYCmWWUCvBx7AZxh+t2NY4FT5JYCwGDiLavMUTiHFLiu5Zi9EJaZWBEeknNRVXI2jNjYsWPPPvtsvZ8AMIMsNyoXAHxatxT4YORpp502YsSI//mf/8EI66KoL2ClQIkDIy4CVFQ/6TNlawNxE/r378/o7HRHFsWFhGhnnz597Aft9Fji3XffTUtLUw27CIRwxiij+kuXLsVr1S5si2YR4AHecccdt956q245qhLm2JgQPkyZMkXkscBebdy40d04FjlUmU2t2YIuQSfxOVXDOmJ5y2lxp/W+FZsci3M1atQoAsiOHTvaN3gYrHW5CwDG4fvvv3c3AhJr2LAhJMRF13+q4ipaTSgjEKPd0cpD9Q2oq3Qb0H9q2HvGGWcMGjQIx0fTHXEUFxICLKHiPYGQ76efflIZmg0fPtz6gZgOdlkinXXWWeecc47lIZEkxnDkyJGzZs3CHFHTpk2bxo0bay+YMGEC2sysu9sBtmzfvt3dOBaWyXlCSoMDzEVVQyc7d+5siQo/rXvMKOCMXi6HNnXr1lU9PUlJSVG5AFSsWJFTLVq0yN0OgPVl8ODBOMm6T2N5yC76oO5FG9Qr0Y8CTgTdBtSzhJ1++um33347noL37YjIohiRMD4+vn379u6G42DKDhz5v5As+RdccIHKAMKsXLlSZSayV69e999/f7du3azqo4Xvv/8+/ozul9arV++iiy7SLoAr+8gjjyQmJrrbjkPYlpycrPJxFdd6nhZQPSsrS2X8apgG7e156AA5mwS0eNSqx6e1b5PTABLm5w9bMDpMRI7okcoGDRoMHToU+89ipPe8OaEMC9YSRA8b6QbzRX9YLyjTSfUTUMM6cumll+KrMxDv+8CRh7pYTID/mVtdWB3vvPNOAjm3UXY2RtJaRWZOP7hGj2mW484nU3v33XcvXrwY3hJEeU9OKPXvf/971apVRJ72AQMNEhIS7MnBihUrdFFh27Zt9h4MR73yyitUQnjr7kK/ZcuWffTRR3iPqhFQvn/84x9W5yjceOON7r7Am3T0X7sKBgfm+UMTvIOpU6deeOGFGBDvMKXx5O52eEFPBDoAmEo6o/6oXs2oYYVi+ubNmxfOl+MLieJFQlQ8h+4CPLevv/7aqi944oknrPNJcGWfHELUZ555BhrYvQDOEInBt/fee8/egBWwWriO9jE9gMNYFQyvu+04c+bM0ckBxgrWuTscB1P2xRdfUO8lIcYcV5kw7/rrr7dKBiB2jjfUHnjgAXRRe1u2bLlgwQJ3xwkB+RAkf/rppwMHDvQ6cvQBFZc9FLy9ChF0CXIux1xw9QD13KeaghpQSW979uz54YcfElcjYXc80YRi5I4CrFPu/0FHDSzStAl4qtZ5gwnWjpUpU2bYsGHjx4/v3bu3agDRGnHU008/jb96yy23eEnOrOs2rLsdeIls0KBB1taBL7/80l5r69atr776qsqAoM4+27QIKJiJbTiP9wk+drhLly7uRgAQnmYqs/zbO6gnBi7KCfv27Us8jMlFYnq1HR2i/1BUDARqHyLQDS5BDvHkeVLm6sASTC3j4uII1AnmiQD/+c9/9unTh3Uq1N07QajfxQdTpkyxVgXAq9ze18iRI93djoPB2bfPfYfTgpprr73WvoIDMG4ZGRmHA5+3gGm5P6WOxrRt23bt2rXw4YorrnBrA44i0SM6lJaWNmbMGPtcAd16+eWXqedy2FjbZ8gmy7xr167bbruN2AbFqlOnjn0HyILD7VGVK1fmJO6O342kpKRJkyZdddVVultDV7kEOWNkE+YDW//7wXkEa/TEQODdC7RZtWrVZs2aXXnllRMmTFi9ejUCx3Fwux6VKHYkhAbYMa2I5P369bN3zywwaGbyA8iThABrCVf12x9ywn0RhnzlypWEH6eeeipUlGZALeytYksa/Otf/9LJATy55pprfvjhB1jkvXnbokULvVMKMD72RgLuMYql8xCIwjSoO3PmzNyjwIm1T6I5/LnnnnN3/G5w6czMzM2bN99///36n34aJkCklodQRYAttsFxYVtSADqhzknOqajRLjUDlLkKkkRol156KVH6V199xVIV5dyzKHYkxFjhAZ511ln4hPgq3pDMAgvjTq/jDB8+HK/S3XEsiDBff/11pvy1117bsWOHWxsAvF28ePEbb7xx7733jho16vnnn4eZXFp7Cd68OgRDWgWgpQFA2ocffliNAT6wbU94ox95AMiQlZUFH3IzECxZssS+E4fuMijbgWABHrIKXHzxxQjTdp6uUhbgBuRhgIyIgtgosJfcHqIagWZCgMJH3U5g25OrAbuqV6+OQ/G///u/7777LgEzYkEg5G4vox7FjoQCupuamprf6/NYHt3AJKbXT+zdHUECK/Sf/vQnFCigUTmBbl1++eXEh2rM1e0vrdhlf+t4XKSkpFx00UXSV3LCOSynuy9IIAzDK/7+++8JiQcOHFi/fn1rsQWuC0mwYAxWtlHWDKhsYXcpFzhccE93hK7sSkhIwDMfMGDAuHHjuDqLKY4DkilC3LOIun8SGh4wi/iK5O72sWBlZRdK079/fyKfoL9eyMmbN2+enJyMTbN3ZSwwX//4xz/sk0DaPPTQQ2pWsWJF+mNfcC0YqPXSpUthCNPMJszv3r2791bt7wfdwAbWrl0bPjCiKlWqcBW6Sr29TQJyE4NjISc5ZTWmjTYtVCPQGFSqVAnuEYheeOGFf/zjHy+77LK//vWvp59+erdu3eA/xpYhF0YyUQd3xD48YPpxQTdu3IhXGaKVFbVbvnz5lVde6U7DEcTHx+NT4WGqGWbwvvvuc/c5DhT6TV+JnjJlir17BPOHDBli48zQYcWKFY8//nivXr1EswIAYXJwxlujJZJNhsDAYR3RL04KDicmnYHk6YQXRbif4/cREUDFV1555ZtvvsH7ZS1XbOM1VklJSYMGDVqwYIE2cWIJL3O8MFAAVq1ahWeLPdQmxh89vummm+Rshw74+Xv37t2yZcvs2bNxFAFl6kVLVE4F2UyRDUZRifdBDQYfo0oB09e+fXs9ie3atSu2zvvcJWbgkzDCwNJi7lBEYiG3ygOs8Z///Oe5c+dSJkD94IMPevbsaW3FcYFFfeqpp8aOHet96+2aa6655ZZbiDOPa6l+J+BYWlpaegCYL0axcOFCyIlLyZBxswnhatSoAbVwYlkX9LMpFqPGjRvDNHhIJxk1xCM3FqMoupqFgE/CqAbkmTx58t///ndYev31199///15crUA4Ln97W9/e++996CEajgDcdS9995LKBU2q8JyAHT3Zf369QeO/MNz1iAMHVTEEsJGCnQJTtKSgrWZsQ2fhEUAelCJETsxjVy0aNHw4cP1+SnVYFJweu++++7Bgwej+qoMPyAhPYFvlOlbrBq646KY3h0tWoAn4IR1tFq1ajh4up9heYhbSKiG79eyZUtFZeEH17WXLrYMBD4JYx8KtHA+8QATExNtfEhIlpKSct5553nfQfURfsS+w+0DEIm1bt368ccfHzdunPexJzwszI/ufYQUPgmLESpWrHjjjTf++9//bt++fbly5apXr963b1/7A3wfkYJ/Y6bYgRnHKf3+++/hYdeuXWt4PqboIyLwSejDR4Thu6M+fEQYPgl9+IgwfBL68BFh+CT04SPC8Enow0eE4ZPQh48IwyehDx8Rhk9CHz4iDJ+EPnxEGD4JffiIMHwS+vARUTjO/wNaf/wzEDNBqQAAAABJRU5ErkJggg=="

//save js

$.getScript("https://realmtiel.com/troops2seat/static/FileSaver.js", function () {
});

//globals
var units = ["1PLT"]
var personnel = [
    {name: "Burch", rank: "PVT", unit: 0, license: false},
    {name: "Jorge", rank: "SPC", unit: 0, license: true}];
var vehicleTypes = [
    {name: "hUMvEe", image: truk, isEquipment: false},
    {name: "Trailer", image: noImage, isEquipment: true}];
var vehicles = [
    {bumper: "C200", type: 0, unit: 0}];
var editingItem = false;
var vehicleAssignments = [];


window.onload = function () {
    //first panel loaded should go here
    renderVehiclePanel();
    if (document.cookie.split(';').some((item) => item.trim().startsWith('startupWarning='))) {
    } else {
        $("#modalAppStart").addClass("is-active");
        document.cookie = "startupWarning=true;"
    }
    //set up event listener for image upload
    $("#chooseTypeImage")[0].addEventListener("change", selectVehicleTypeImage)
    $("#uploadData")[0].addEventListener("change", getTroopData)

}

$(".btnAcceptStartup").click(function () {
    $("#modalAppStart").removeClass("is-active");
})

$(".dropdown").click(function () {
    // var selector='#'+this.id+'.dropdown-menu';
    // $(selector).toggle()
    $(this).toggleClass('is-active')
});
// Close dropdowns if user clicks outside of it
$(window).click(function (e) {
    //console.log(e.target.closest("div").className)
    if (!e.target.closest("div").className.includes("dropdown")) {
        $(".dropdown").removeClass('is-active');
    }
});

//handler for rank dropdown, set label to what's selected
$(".dropdownRankItem").click(function () {
    $('#dropDownRank.dropdown').find('#content').text(this.innerText)
})

$("#btnGenReport").click(function () {
    // $("#main").toggle();
    // $("#render").toggle();
    genVehicleAssignments();
    console.log(vehicleAssignments)
    $("#renderContainer")[0].innerHTML="";
    for (index = 0; index < vehicleAssignments.length; index++) {
        addVehicleAssignment(index, $('.enditem_panel.template')[0], $("#renderContainer")[0])
    }

    //tell user about printing
    if (document.cookie.split(';').some((item) => item.trim().startsWith('printWarning='))) {
        //do nothing if this exists
    } else {
        document.cookie = "printWarning=true";

        alert("Select Save to PDF to save a digital copy. Or print it. It's your life.")
    }
    window.print();
})

//render all personnel on Panel and ensure visible
function renderPersonnelPanel() {

    $('#Personnel').removeClass("hidden");
    //clear list
    var original = $(".template.personItem")[0];
    original = original.cloneNode(true);
    $("#lstPersonnel")[0].innerHTML = "";
    $("#lstPersonnel").append(original);
    personnel.forEach(function (item, index) {
        if (item !== undefined) {
            addPerson(item);
        }
    })
    //delete contents of unit dropdown and readd
    clearUnitsDropdown();
    //clean up editing warnings
    $("#btnCancelSubmitPerson").addClass("hidden");
    $("#lblPersonEditWarning").text("");
}

function clearUnitsDropdown() {
    //clear existing selection
    var dropdown = $("#dropDownUnit").find(".dropdown-content")[0];
    dropdown.innerHTML = "";
    units.forEach(function (item, index) {
        if (item !== undefined) {
            dropdown.innerHTML += ("<div class='dropdown-item unitItem' id=\'" + index + "\'>" + item + "<button class=\"removeUnit delete is-small\"></button> </div> \n");
        }
    });
}

function clearVehicleUnitsDropdown() {

    var dropdown = $("#dropDownVehicleUnit").find(".dropdown-content")[0];
    dropdown.innerHTML = "";
    units.forEach(function (item, index) {
        if (item !== undefined) {
            dropdown.innerHTML += ("<div class='dropdown-item vehicleUnitItem' id=\'" + index + "\'>" + item + "<button class=\"removeVehicleUnit delete is-small\"></button> </div> \n");
        }
    });
}


function renderVehiclePanel() {

    $('#Vehicles').removeClass("hidden");
    //clear list
    var original = $(".template.vehiclePanel")[0];
    original = original.cloneNode(true);
    $("#lstVehicles")[0].innerHTML = "";
    $("#lstVehicles").append(original);
    vehicles.forEach(function (item, index) {
        if (item !== undefined) {
            addVehicle(item);
        }
    })
    //clear and readd vehicle type
    clearVehicleTypesDropdown();
    //clear and readd units
    clearVehicleUnitsDropdown();
    //clear deleter
    $("#removeVehicleType").addClass("hidden");
    //clean up editing warnings
    $("#btnCancelSubmitVehicle").addClass("hidden");
    $("#lblPersonEditWarning").text("");
}

function clearVehicleTypesDropdown() {
    //delete contents of vehicle type dropdown and readd
    var dropdown = $("#dropDownVicType").find(".dropdown-content")[0];
    dropdown.innerHTML = "";
    vehicleTypes.forEach(function (item, index) {
        if (item !== undefined) {
            dropdown.innerHTML += ("<div class='dropdown-item vehicleTypeItem' id=\'" + index + "\'>" + item.name + "<button class=\"removeVehicleType delete is-small\"></button> </div>\n");
        }
    });
}

function renderAssignmentsPanel() {
    if (personnel.length <= 0) {
        alert("No personnel to assign. Please add one or more personnel.")
        return;
    }
    if (vehicles.length <= 0) {
        alert("No vehicles to assign. Please add one or more vehicles.")
        return;
    }
    $('#Assignment').removeClass("hidden");
    //really just look against vehicle assignments and personnel
    //cleanup
    //get template, clone, clean, re-add
    //vehicles
    var original = $('.enditem_panel.template')[0]
    node = original.cloneNode(true);
    $('#lstAssignVehicles')[0].textContent = "";
    $('#lstAssignVehicles').append(node);

    //personnel
    genPersonnelAssignmentPanel();

    //generate assignments
    genVehicleAssignments();

    //now write to page
    var original = $('.enditem_panel.template')[0]
    for (index = 0; index < vehicleAssignments.length; index++) {
        addVehicleAssignment(index, original)
    }
}

function genPersonnelAssignmentPanel() {
//personnel
    var original = $('.assignmentPersonItem.template')[0]
    node = original.cloneNode(true);
    $('#lstAssignPersonnel')[0].textContent = "";
    $('#lstAssignPersonnel').append(node);

    //first populate personnel
    for (index = 0; index < personnel.length; index++) {
        try {
            var person = personnel[index]
            //check if already in assignment.
            var personInAssignments = vehicleAssignments.find(assignment => {
                if (assignment !== undefined) {
                    return (personnel[assignment.driver] === person || personnel[assignment.tc] === person);
                }
            })
            if (!personInAssignments) {
                addPersonItem(person)
            }
        } catch (e) {
            continue;
        }
    }
}

function genEquipmentAssignmentPanel() {
//personnel
    var original = $('.assignmentPersonItem.template')[0]
    node = original.cloneNode(true);
    $('#lstAssignPersonnel')[0].textContent = "";
    $('#lstAssignPersonnel').append(node);

    //populate equipment from vehicles that have that checked
    for (index = 0; index < vehicles.length; index++) {
        try {
            if (vehicleTypes[vehicles[index].type].isEquipment) {
                var gear = vehicles[index];
                //check if already in assignment.
                var gearInAssignments = vehicleAssignments.find(assignment => {
                    if (assignment !== undefined) {
                        return (vehicles[assignment.trailer] === gear);
                    }
                })
                //if not already somewhere, pop in list
                if (!gearInAssignments) {
                    addGearItem(gear);
                }
            }
        } catch (e) {
            console.log(e);
            continue;
        }
    }
}

function genVehicleAssignments() {
    //now go through existing vehicle assignments
    //1 remove all vehicle assignments no longer in vehicles
    //2 add all vehicle assignments not in vehicles
    vehicleAssignments.forEach(function (item, index) {
        if (item !== undefined) {
            //not in vehicles, remove
            if (vehicles[item.vehicle] === undefined || vehicleTypes[vehicles[item.vehicle].type].isEquipment) {
                vehicleAssignments[index] = undefined;
            }
        }
    })
    vehicles.forEach(function (item, index) {
        //make sure all vehicles have vehicleAssignment obj
        if (item === undefined) {
            return;
        }
        try {
            var vehicleInAssignments = vehicleAssignments.find(assignment => {
                if (assignment !== undefined) {
                    return vehicles[assignment.vehicle] === item;
                }
            })
        } catch (e) {
            return;
        }
        if (!vehicleInAssignments && !vehicleTypes[item.type].isEquipment) {
            //if not in, create
            vehicleAssignments.push(
                {
                    vehicle: vehicles.indexOf(item),
                    driver: undefined,
                    tc: undefined,
                    trailer: undefined,
                    valid: false
                }
            )
        }
    })
}

//add vehicle assignment to page
function addVehicleAssignment(index, original, location = $('#lstAssignVehicles')) {
    try {
        node = original.cloneNode(true);
        var assignment = vehicleAssignments[index];
        if (assignment === undefined) {
            return false;
        }
        $(node).find("#enditem_bumperNumber").text(vehicles[assignment.vehicle].bumper);
        $(node).find("#enditem_type").text(vehicleTypes[vehicles[assignment.vehicle].type].name);
        $(node).find("#enditem_unit").text(units[vehicles[assignment.vehicle].unit]);

        //if no TC or driver, leave empty and coat red
        var driverElement = $(node).find("#inputDriver");
        var tcElement = $(node).find("#inputTC");
        var trailerElement = $(node).find("#inputTrailer");
        if (assignment.driver !== undefined) {
            driverElement.text(personnel[assignment.driver].rank + " " + personnel[assignment.driver].name);
            if (personnel[assignment.driver].license) {
                driverElement.addClass("is-success is-light")
            }
            else {
                driverElement.addClass("is-danger is-light");
            }
        } else {
            driverElement.text("");
            driverElement.addClass("is-danger is-light");
        }
        if (assignment.tc !== undefined) {
            tcElement.text(personnel[assignment.tc].rank + " " + personnel[assignment.tc].name);
            if (personnel[assignment.tc].license) {
                tcElement.addClass("is-success is-light");
            }
            else {
                tcElement.addClass("is-danger is-light");
            }
        } else {
            tcElement.text("");
            tcElement.addClass("is-danger is-light");
        }
        if (assignment.trailer !== undefined) {
            trailerElement.text(vehicles[assignment.trailer].bumper);
            trailerElement.addClass("is-success is-light");
        } else {
            trailerElement.text("");
            // trailerElement.addClass("is-danger is-light");
        }
        //image
        try {
            $(node).find(".enditem_vehiclePreview").css("background-image", "url(" + vehicleTypes[vehicles[assignment.vehicle].type].image + ")");
        } catch (e) {
        }
        //set indicators
        if (vehicles[assignment.vehicle].radio) {
            $(node).find(".radioProperty").addClass("present")
        }
        if (vehicles[assignment.vehicle].jbcp) {
            $(node).find(".jbcpProperty").addClass("present")
        }
        //everyone has license
        if (assignment.tc !== undefined && assignment.driver !== undefined) {
            if (personnel[assignment.tc].license && personnel[assignment.driver].license) {
                $(node).find(".licensesProperty").addClass("present")
            }
        }

        $(node).attr('id', index);
        $(node).removeClass("template");
        location.append(node);

        //event handlers
        var items = [driverElement, tcElement, trailerElement]
        items.forEach(function (element, index) {
            element[0].addEventListener('drop', assignmentDropPerson);
            element[0].addEventListener('dragenter', function (event) {
                event.preventDefault()
            });
            element[0].addEventListener('dragover', function (event) {
                event.preventDefault()
            });
        })
        // driverElement[0].addEventListener('drop',assignmentDropPerson);
        //
        // tcElement[0].addEventListener('drop',assignmentDropPerson);
        // trailerElement[0].addEventListener('drop',assignmentDropPerson);
    } catch (e) {
        console.log(e);
        return;
    }
}

//main navigation on the page through side buttons
$(".toplevelnav").click(function () {
    $(".appPanel").addClass("hidden");
    //clean everything
    cleanPersonnelPanel();
    cleanVehiclePanel();
    cleanAssignmentsPanel();
    editingItem = false;
    //if element is assignment, repopulate
    if (this.innerText === "Personnel") {
        renderPersonnelPanel();
    }
    if (this.innerText === "Vehicles") {
        renderVehiclePanel();
    }
    if (this.innerText === "Assignment") {
        renderAssignmentsPanel();
    }
});

//add a person object to the assignment panel
function addPersonItem(thisperson) {
    var original = $('.assignmentPersonItem.template')[0]
    node = original.cloneNode(true);
    let itemString = thisperson.rank + ' ' + thisperson.name;
    if (thisperson.license) {
        itemString += "<p style='float:right; font-style: italic; font-weight: normal'>  Licensed</p>"
    }
    $(node).find(".title")[0].innerHTML = (itemString);
    $(node).attr('id', personnel.indexOf(thisperson));
    $(node).removeClass("template");
    $('#lstAssignPersonnel').append(node);
    //add event handlers
    node.addEventListener('dragstart', assignmentDragStart)
    node.addEventListener('dragend', assignmentDragEnd)
}

//same as above but for gear
function addGearItem(thisgear) {
    var original = $('.assignmentPersonItem.template')[0]
    node = original.cloneNode(true);
    $(node).find(".title").text(thisgear.bumper);
    $(node).attr('id', vehicles.indexOf(thisgear));
    $(node).removeClass("template");
    $('#lstAssignPersonnel').append(node);
    //add event handlers
    node.addEventListener('dragstart', assignmentDragStart)
    node.addEventListener('dragend', assignmentDragEnd)
}

// when vehicle panel selected, color & load into panel
$("#lstVehicles").on('click', ".vehiclePanel", function (e) {
    //intuitive for users to double click to deselect.
    if ($("#" + editingItem + ".vehiclePanel")[0] === e.target.closest("div.vehiclePanel")) {
        cleanVehiclePanel();
        editingItem = false;
        return;
    }
    editingItem = e.target.closest("div.vehiclePanel").id;
    //change submit button to reflect
    var targetVehicle = vehicles[editingItem];
    //if not exist ignore
    if (targetVehicle === undefined) {
        editingItem = false;
        return;
    }
    //update warning
    $("#lblVehicleEditWarning").text("Editing " + targetVehicle.bumper);
    $("#btnCancelSubmitVehicle").removeClass("hidden");

    $(".vehiclePanel").removeClass('is-active');
    $(this).addClass('is-active')
    $("#inputVehicleBumper").val(targetVehicle.bumper);
    $('#chkVehicleJBCP').prop('checked', targetVehicle.jbcp);
    $('#chkVehicleRadio').prop('checked', targetVehicle.radio);
    $('#dropDownVicType.dropdown').find('button').text(vehicleTypes[targetVehicle.type].name);
    //set id too
    $('#dropDownVicType.dropdown').find('button').attr("id", vehicleTypes.indexOf(vehicleTypes[targetVehicle.type]));
    //same but for vehicle unit
    $('#dropDownVehicleUnit.dropdown').find('.button').text(units[targetVehicle.unit]);
    //set id too
    $('#dropDownVehicleUnit.dropdown').find('.button').attr("id", units.indexOf(targetVehicle.unit));
    e.preventDefault();
});

//handle deletions
$("#lstPersonnel").on('click', "#removePerson", function (e) {
    var node = e.target.closest("div.personItem");
    var nodeID = node.id;
    //if deleting edited item, clear
    if (nodeID === editingItem) {
        cleanPersonnelPanel();
    }
    personnel[nodeID] = undefined;
    node.remove();
});

//when person click change color load into panel
//necessary to use different syntax here since dynamically added elements
$("#lstPersonnel").on('click', ".personItem", function (e) {
    //deselect all for sanity
    $(".personItem").removeClass("is-active");

    if ($("#" + editingItem + ".personItem")[0] === e.target.closest("div.personItem")) {
        cleanPersonnelPanel();
        editingItem = false;
        return;
    }
    //grab the personitem, store ID
    editingItem = e.target.closest("div.personItem").id;
    var targetPerson = personnel[editingItem];
    //if no longer exists ignore
    if (targetPerson === undefined) {
        editingItem = false;
        return;
    }
    //update warning and show cancel button
    $("#lblPersonEditWarning").text("Editing " + targetPerson.rank + " " + targetPerson.name);
    $("#btnCancelSubmitPerson").removeClass("hidden");

    //visual selection indicator
    e.target.closest("div.personItem").classList.add("is-active")
    try {
        $("#inputPersonName").val(targetPerson.name);
        $('#chkPersonLicense').prop('checked', targetPerson.license);
        $('#dropDownRank.dropdown').find('#content').text(targetPerson.rank);
        $('#dropDownUnit.dropdown').find('button').text(units[targetPerson.unit]);

    } catch (e) {
        alert("error occured while loading for edit");
    }

    e.preventDefault();
});

//when cancel button hit, clear panel
$("#btnCancelSubmitPerson").click(function () {
    //just dry render
    renderPersonnelPanel();
    cleanPersonnelPanel();
    editingItem = false;
})

//when cancel button hit, clear panel
$("#btnCancelSubmitVehicle").click(function () {
    renderVehiclePanel();
    cleanVehiclePanel();
    editingItem = false;
})

//when submit button clicked, create new entry in Personnel and clear panel.
//append a cell to lstPersonnel or update the existing one if editing
$("#btnSubmitPerson").click(function () {

    var newPerson = {
        name: $("#inputPersonName").val(),
        rank: $('#dropDownRank.dropdown').find('#content').text(),
        unit: units.indexOf($('#dropDownUnit.dropdown').find('.button').text()),
        license: $("#chkPersonLicense")[0].checked
    }
    if (newPerson.name.length <= 0) {
        alert("Enter a valid name in the name field.")
        return false;
    }
    if (newPerson.unit === -1 || newPerson.unit === undefined) {
        alert("Select a valid unit.")
        return false;
    }
    if (editingItem !== false) {
        personnel[editingItem] = newPerson;
        var existingNode = $("#" + editingItem + ".personItem");
        addPerson(newPerson, existingNode)
        //revert back
        existingNode.removeClass("is-active");
        //remove warning
        // $("#lblPersonEditWarning").text("");
        editingItem = false;
        cleanPersonnelPanel(true);
        return newPerson;
    } else {
        personnel.push(newPerson);
        addPerson(newPerson)
        cleanPersonnelPanel();
        return newPerson;
    }
});

//clear all elements from the form
function cleanPersonnelPanel(full = false) {
    if (full) {
        $('#dropDownRank.dropdown').find('#content').text("")
        $('#dropDownUnit.dropdown').find('.button').text("")
    }
    $("#inputPersonName").val("")
    $('#chkPersonLicense').prop('checked', false);
    $("#lblPersonEditWarning").text("");
    $("#btnCancelSubmitPerson").addClass("hidden");
    $(".personItem").removeClass("is-active");
}

//creates a cell in lstPersonnel for a given person object
function addPerson(newPerson, node = null) {
    if (node == null) {
        // get node
        var original = $('.personItem.template')[0]
        node = original.cloneNode(true);
    }

    $(node).find(".title").text(newPerson.rank + ' ' + newPerson.name);
    $(node).find(".unit").text(units[newPerson.unit]);
    $(node).attr('id', personnel.indexOf(newPerson));
    $(node).removeClass("template");
    $('#lstPersonnel').append(node);
}

//handle deletions when an X is clicked
$("#lstVehicles").on('click', "#removeVehicle", function (e) {
    var node = e.target.closest("div.vehiclePanel");
    var nodeID = node.id;
    //if this is the same as what's being edited, clear
    if (nodeID === editingItem) {
        cleanVehiclePanel();
    }
    vehicles[nodeID] = undefined;
    node.remove();
});

//when submit button clicked, create new entry in Vehicles and clear panel.
$("#btnSubmitVehicle").click(function () {

    var newVehicle = {
        bumper: $("#inputVehicleBumper").val(),
        radio: $("#chkVehicleRadio")[0].checked,
        unit: units.indexOf($('#dropDownVehicleUnit.dropdown').find('button').text()),
        jbcp: $("#chkVehicleJBCP")[0].checked,
        type: $('#dropDownVicType').find('.button').attr("id")
    }
    if (newVehicle.bumper.length <= 0) {
        alert("Enter a valid bumper# in the bumper# field.")
        return false;
    }
    if (vehicleTypes[newVehicle.type] === undefined) {
        alert("Select a valid vehicle type.")
        return false;
    }
    if (newVehicle.unit === -1 || newVehicle.unit === undefined) {
        alert("Select a valid unit.")
        return false;
    }
    if (editingItem !== false) {
        vehicles[editingItem] = newVehicle;
        var existingNode = $("#" + editingItem + ".vehiclePanel");
        addVehicle(newVehicle, existingNode);
        //make sure not selected
        existingNode.removeClass("is-active");
        //remove warning
        // $("#lblVehicleEditWarning").text("");
        editingItem = false;
        cleanVehiclePanel(true);
        return newVehicle;
    } else {
        vehicles.push(newVehicle);
        addVehicle(newVehicle)
        //full cleanup
        cleanVehiclePanel();
        return newVehicle;
    }
});

//clear all elements from the panel. Can be done fully or just most pertinent elements
function cleanVehiclePanel(full = false) {
    if (full) {
        $('#dropDownVicType.dropdown').find('button').text("")
        $('#dropDownVehicleUnit.dropdown').find('.button').text("")
    }
    $("#inputVehicleBumper").val("")
    $('#chkVehicleJBCP').prop('checked', false);
    $('#chkVehicleRadio').prop('checked', false);
    $("#lblVehicleEditWarning").text("");
    $("#imgVehiclePanelPreview").css("background-image", "");
    $("#btnCancelSubmitVehicle").addClass("hidden");
    $(".vehiclePanel").removeClass("is-active");
}

function cleanAssignmentsPanel() {
    $(".tabLstAssignment").removeClass("is-active");
    $("#tabLstAssignmentPeople").addClass("is-active");
}


//append a cell to lstVehicles or update the existing one if editing
function addVehicle(newVehicle, node = null) {
    // console.log(newVehicle)
    if (node == null) {
        // get node
        var original = $('.vehiclePanel.template')[0]
        node = original.cloneNode(true);
    }

    $(node).find(".bumper").text(newVehicle.bumper);
    try {
        $(node).find(".type").text(vehicleTypes[newVehicle.type].name);
        if (vehicleTypes[newVehicle.type].image !== undefined) {
            $(node).find('.vehiclePanelImage').css("background-image", "url(" + vehicleTypes[newVehicle.type].image + ")");
        }
    } catch (e) {
        $(node).find(".type").text("")
    }
    $(node).find(".unit").text(units[newVehicle.unit]);
    $(node).attr('id', vehicles.indexOf(newVehicle));
    $(node).removeClass("template");
    $('#lstVehicles').append(node);
}

//unit handlers
$("#addUnit").click(function () {
    $("#addUnitPanel").addClass("is-active");
})
$(".cancelUnit").click(function () {
    closeCreateUnit();
})
// save from modal to units array
$("#saveUnit").click(function () {
    var unitName = $("#inputUnitName").val();
    if (unitName.length <= 0) {
        alert("Enter a valid unit name.");
        return;
    }
    units.push(unitName
    );
    //close and cleanup
    closeCreateUnit();
    //refresh vehicle types on main by recalling render
    clearUnitsDropdown();
})

function closeCreateUnit() {
    $("#addUnitPanel").removeClass("is-active");
    $("#inputUnitName").val("");
}

//vehicle unit handlers
$("#addVehicleUnit").click(function () {
    $("#addVehicleUnitPanel").addClass("is-active");
})
$(".cancelUnit").click(function () {
    closeCreateVehicleUnit();
})
// save from modal to units array
$("#saveVehicleUnit").click(function () {
    var unitName = $("#inputVehicleUnitName").val();
    if (unitName.length <= 0) {
        alert("Enter a valid unit name.");
        return;
    }
    units.push(unitName
    );
    //close and cleanup
    closeCreateVehicleUnit();
    //refresh vehicle types on main by recalling render
    clearVehicleUnitsDropdown();
})

function closeCreateVehicleUnit() {
    $("#addVehicleUnitPanel").removeClass("is-active");
    $("#inputVehicleUnitName").val("");
}

//handle when click unit from the unit dropdown on personnel panel
$(".dropdown-content").on('click', ".unitItem", function (e) {
    var targetButton = $("#dropDownUnit").find(".button");
    if (units[this.id] === undefined) return;
    targetButton.text(units[this.id])
    targetButton.attr("id", this.id)
});
//handle when try to delete unit from dropdown-content
$(".dropdown-content").on('click', ".removeUnit", function (e) {
    var targetType = e.target.closest(".unitItem");
    try {
        units[targetType.id] = undefined;
    } catch (e) {
    }
    $('#dropDownUnit.dropdown').find('.button').text("");
    clearUnitsDropdown();
    // renderPersonnelPanel();
});

//same but for vehicle unit
//handle when click unit from the unit dropdown on personnel panel
$(".dropdown-content").on('click', ".vehicleUnitItem", function (e) {
    var targetButton = $("#dropDownVehicleUnit").find(".button");
    if (units[this.id] === undefined) return;
    targetButton.text(units[this.id])
    targetButton.attr("id", this.id)
});
//handle when try to delete unit from dropdown-content
$(".dropdown-content").on('click', ".removeVehicleUnit", function (e) {
    var targetType = e.target.closest(".vehicleUnitItem");
    try {
        units[targetType.id] = undefined;
    } catch (e) {
    }
    //clear existing selection
    $('#dropDownVehicleUnit.dropdown').find('.button').text("");
    clearVehicleUnitsDropdown();
    // renderVehiclePanel();
});

//vehicletype handlers
$("#addVehicleType").click(function () {
    $("#addVehicleTypePanel").addClass("is-active");
})

// cancel creation of a vehicle type on the modal
$(".cancelVehicleType").click(function () {
    closeVehicleTypes();
})

// save from modal to vehicletypes array
$("#saveVehicleType").click(function () {
    var typeName = $("#inputVehicleTypeName").val();
    if (typeName.length <= 0) {
        alert("Enter a valid vehicle type name.");
        return;
    }
    var imageData = $("#imgVehicleTypePreview")[0].src;
    if ($("#chooseTypeImage").val() === "") {
        //revert to basic image
        imageData = noImage;
    }
    var isEquipment = $("#chkTypeTrailer")[0].checked
    vehicleTypes.push(
        {
            name: typeName,
            image: imageData,
            isEquipment: isEquipment
        }
    )
    //close and cleanup
    closeVehicleTypes();
    //refresh vehicle types on main by recalling render
    clearVehicleTypesDropdown();
})

//clears vehicletype creation modal for re-use
function closeVehicleTypes() {
    $("#addVehicleTypePanel").removeClass("is-active");
    $("#inputVehicleTypeName").val("");
    $("#chooseTypeImage").val("");
    $("#chkTypeTrailer").prop('checked', "");
    $("#imgVehicleTypePreview")[0].src = "";
}

//handle when click vehicle type
$(".dropdown-content").on('click', ".vehicleTypeItem", function (e) {
    var targetButton = $("#dropDownVicType").find(".button");
    if (vehicleTypes[this.id] === undefined) return;
    targetButton.text(vehicleTypes[this.id].name)
    targetButton.attr("id", this.id)
    //set preview
    $("#imgVehiclePanelPreview").css("background-image", "url(" + vehicleTypes[this.id].image + ")");
    // $("#removeVehicleType").removeClass("hidden");
});

//handle click vehicle type deletion
$("#removeVehicleType").click(function () {
    alert("asfas")
    var targetButton = $("#dropDownVicType").find(".button");
    vehicleTypes[targetButton.attr("id")] = undefined;
    //clear button
    clearVehicleTypesDropdown();
});

//handle when try to delete unit from dropdown-content
$(".dropdown-content").on('click', ".removeVehicleType", function (e) {
    var targetType = e.target.closest(".vehicleTypeItem");
    vehicleTypes[targetType.id] = undefined;
    $("#dropDownVicType").find("button").text("");
    clearVehicleTypesDropdown();
    $("#imgVehiclePanelPreview").css("background-image", "");
    // renderVehiclePanel();
});

function allowDrop(e) {
    // e.preventDefault();
}


function assignmentDragStart(e) {
    e.dataTransfer.setData("currentID", e.target.id);
    e.target.classList.add("dragging");
}

function assignmentDragEnd(e) {
    e.target.classList.remove("dragging");
}

//called on the slots on the vehicleassignmentpanel when a person item is dropped
//transfers element to the panel and removes the person from the pool
function assignmentDropPerson(e) {
    console.log(e)
    e.preventDefault();
    e.stopPropagation();
    var targetID = e.dataTransfer.getData("currentID");
    // e.target.id=targetPersonID
    var thisEndItem = vehicleAssignments[e.target.closest(".enditem_panel").id];
    //do different things depending on what target is
    //and type right now
    if ($("#tabLstAssignmentPeople").hasClass("is-active")) {
        var person = personnel[targetID]
        if (e.target.id === "inputDriver") {
            //if there's already something there, put them back in the pool
            if (e.target.innerHTML !== "") {
                addPersonItem(personnel[thisEndItem.driver]);
            }
            thisEndItem.driver = personnel.indexOf(person);
            e.target.innerHTML = person.rank + " " + person.name;
            //if have license
            if (person.license) {
                e.target.classList.add("is-success");
                e.target.classList.remove("is-danger");
            }

        } else if (e.target.id === "inputTC") {
            //if there's already something there, put them back in the pool
            if (e.target.innerHTML !== "") {
                addPersonItem(personnel[thisEndItem.tc]);
            }
            thisEndItem.tc = personnel.indexOf(person);
            e.target.innerHTML = person.rank + " " + person.name;
            if (person.license) {
                e.target.classList.add("is-success");
                e.target.classList.remove("is-danger");
            }
        } else {
            alert("That can't go here.")
            return;
        }
    } else {
        if (e.target.id === "inputTrailer") {
            var gear = vehicles[targetID];
            //if there's already something there, put them back in the pool
            if (e.target.innerHTML !== "") {
                addGearItem(vehicles[thisEndItem.trailer]);
            }
            thisEndItem.trailer = vehicles.indexOf(gear);
            e.target.innerHTML = gear.bumper
            e.target.classList.add("is-success");
            e.target.classList.remove("is-danger");

        } else {
            alert("That can't go here.")
            return;
        }
    }
    //remove from pool
    $("#" + targetID + ".assignmentPersonItem").remove();
}

//on click of a dropzone occupied by a person, remove them and return from pool
//put person back into roster
$("#lstAssignVehicles").on('click', ".assignmentDropzone", function (e) {
    if (this.innerHTML === "") return;
    var thisEndItem = vehicleAssignments[e.target.closest(".enditem_panel").id];
    var evictee = undefined;
    if ($("#tabLstAssignmentPeople").hasClass("is-active")) {
        if (this.id === "inputDriver") {
            evictee = personnel[thisEndItem.driver];
            thisEndItem.driver = undefined;
        }
        if (this.id === "inputTC") {
            evictee = personnel[thisEndItem.tc];
            thisEndItem.tc = undefined;
        }
        addPersonItem(evictee);
    } else {
        if (this.id === "inputTrailer") {
            evictee = vehicles[thisEndItem.trailer];
            thisEndItem.trailer = undefined;
        }
        addGearItem(evictee);
    }
    this.innerHTML = "";
    this.classList.remove("is-success")
    this.classList.add("is-danger")
    //put person back in pool
})

//called when users selects an image to load in the new vehicle type modal
//loads file in b64 into the image tag on the modal which can then be manipulated by other functions
function selectVehicleTypeImage(e) {
    //read local file selected by user
    var reader = new FileReader();
    reader.onload = function () {
        //render image to select element
        var preview = $("#imgVehicleTypePreview")[0]
        preview.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
}

$(".download").click(function () {
    //serialize all items
    var saveData = {
        units: units,
        personnel: personnel,
        vehicleTypes: vehicleTypes,
        vehicles: vehicles,
        vehicleAssignments: vehicleAssignments
    }
    //save file
    saveAs(new Blob([JSON.stringify(saveData)], {type: "octet/stream"}), "troopData.dat");
});

//get uploaded data and apply to instance
function getTroopData(e) {
    //read local file selected by user
    var reader = new FileReader();
    //once upload complete execute inline function
    reader.onload = function () {
        //take string data, parse from json into js objects
        var totalData = JSON.parse(reader.result);
        units = totalData["units"]
        vehicleTypes = totalData["vehicleTypes"]
        vehicles = totalData["vehicles"]
        personnel = totalData["personnel"]
        vehicleAssignments = totalData["vehicleAssignments"]
        //force
        $("#vehiclesNav").click();
    };
    reader.readAsText(e.target.files[0]);
}

$(".tabLstAssignment").click(function () {
    $(".tabLstAssignment").removeClass("is-active");
    $(this).addClass("is-active");
    if (this.id === "tabLstAssignmentEquipment") {
        //populate with equipment
        genEquipmentAssignmentPanel();

    } else if (this.id === "tabLstAssignmentPeople") {
        //populate with people
        genPersonnelAssignmentPanel();
    }
});