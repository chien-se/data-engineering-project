
def calculate_discount(price, discount_percent=10):
    """
    Calculate discounted price.
    
    Parameters:
    - price: original price
    - discount_percent: discount percentage (default 10%)
    
    Returns:
    - discounted price
    """
    discount_amount = price * (discount_percent / 100)
    return price - discount_amount

# Help information
help(calculate_discount)