# test_setup.py

import pandas as pd
import numpy as np
import requests

print("✅ Python version:", end=" ")
import sys
print(sys.version)

print("✅ Pandas version:", pd.__version__)
print("✅ NumPy version:", np.__version__)
print("✅ Requests version:", requests.__version__)

print("\n🎉 All setup complete!")