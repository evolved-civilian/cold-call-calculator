window.onload = function() {
    const calculator = new ColdCallCalculator(344000, 1000, 6, 300);
    const growthHacker = new GrowthHacker();
    const ui = new UI(calculator, growthHacker);

    // Start the UI
};
