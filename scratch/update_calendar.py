import re

filepath = r"c:\Amrita\S4\23AID215\GridAccess\calender.html"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Miami GP (Round 04) to Completed
miami_old = """                <div class="race-card next-race">
                    <div class="race-round">
                        <span class="round-label">ROUND</span>
                        <span class="round-number">04</span>
                    </div>
                    <div class="race-info">
                        <div class="race-status-date">
                            <span class="status-badge badge-next">NEXT RACE</span>
                            <span class="race-date">May 04</span>
                        </div>
                        <h2 class="race-name">Miami Grand Prix</h2>
                        <div class="race-location">
                            <img src="images/location.png" alt="location">
                            <span>Miami, United States</span>
                        </div>
                    </div>
                    <div class="race-actions">
                        <a href="tickets.html" class="btn-tickets">Buy Tickets</a>
                    </div>
                </div>"""

miami_new = """                <div class="race-card completed">
                    <div class="race-round">
                        <span class="round-label">ROUND</span>
                        <span class="round-number">04</span>
                    </div>
                    <div class="race-info">
                        <div class="race-status-date">
                            <span class="status-badge badge-completed">COMPLETED</span>
                            <span class="race-date">May 04</span>
                        </div>
                        <h2 class="race-name">Miami Grand Prix</h2>
                        <div class="race-location">
                            <img src="images/location.png" alt="location">
                            <span>Miami, United States</span>
                        </div>
                    </div>
                    <div class="race-actions">
                        <a href="results.html" class="btn-results">Results</a>
                    </div>
                </div>"""

content = content.replace(miami_old, miami_new)

# 2. Update Canadian GP (Round 05) to Next Race
canada_old = """                <div class="race-card upcoming">
                    <div class="race-round">
                        <span class="round-label">ROUND</span>
                        <span class="round-number">05</span>
                    </div>
                    <div class="race-info">
                        <div class="race-status-date">
                            <span class="race-date">Jun 15</span>
                        </div>
                        <h2 class="race-name">Canadian Grand Prix</h2>
                        <div class="race-location">
                            <img src="images/location.png" alt="location">
                            <span>Montreal, Canada</span>
                        </div>
                    </div>
                    <div class="race-actions">
                        <a class="btn-notify">Notify Me</a>
                        <a href="tickets.html" class="btn-tickets">Buy Tickets</a>
                    </div>
                </div>"""

canada_new = """                <div class="race-card next-race">
                    <div class="race-round">
                        <span class="round-label">ROUND</span>
                        <span class="round-number">05</span>
                    </div>
                    <div class="race-info">
                        <div class="race-status-date">
                            <span class="status-badge badge-next">NEXT RACE</span>
                            <span class="race-date">Jun 15</span>
                        </div>
                        <h2 class="race-name">Canadian Grand Prix</h2>
                        <div class="race-location">
                            <img src="images/location.png" alt="location">
                            <span>Montreal, Canada</span>
                        </div>
                    </div>
                    <div class="race-actions">
                        <a href="tickets.html" class="btn-tickets">Buy Tickets</a>
                    </div>
                </div>"""

content = content.replace(canada_old, canada_new)

# 3. Remove all other "Notify Me" buttons
# They look like:
#                     <div class="race-actions">
#                         <a class="btn-notify">Notify Me</a>
#                         <a href="tickets.html" class="btn-tickets">Buy Tickets</a>
#                     </div>
notify_pattern = r"""                    <div class="race-actions">
                        <a class="btn-notify">Notify Me</a>
                        <a href="tickets.html" class="btn-tickets">Buy Tickets</a>
                    </div>"""

notify_replacement = r"""                    <div class="race-actions">
                        <a href="tickets.html" class="btn-tickets">Buy Tickets</a>
                    </div>"""

content = content.replace(notify_pattern, notify_replacement)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated calender.html successfully!")
