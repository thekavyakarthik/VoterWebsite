import matplotlib.pyplot as plt

# Sample data
x = [1, 2, 3, 4, 5]
y = [10, 15, 13, 17, 12]

# Create the bar graph
plt.bar(x, y)

# Add labels and title
plt.xlabel('X Axis')
plt.ylabel('Y Axis')
plt.title('Bar Graph Example')

# Display the graph
# plt.show()
plt.grid(True)
plt.savefig('./plot-01.png', format='png', dpi=300)