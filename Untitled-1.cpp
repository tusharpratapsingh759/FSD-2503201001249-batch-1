#include <iostream>
using namespace std;

// Function declarations
void sum();
int sum(int, int);
float sum(int, int, float);

int main() {
    int a, b, r1;
    float r2, c;

    // First function call
    sum();

    // Input for overloaded functions
    cout << "Enter a, b and c: ";
    cin >> a >> b >> c;

    r1 = sum(a, b);
    r2 = sum(a, b, c);

    cout << "The sum is: " << r1 << endl;
    cout << "The sum is: " << r2 << endl;

    return 0;
}

// Function with no arguments and no return value
void sum() {
    int x, y, s;

    cout << "Enter two numbers: ";
    cin >> x >> y;

    s = x + y;

    cout << "The sum is: " << s << endl;
}

// Function with two integer arguments
int sum(int x, int y) {
    int s = x + y;
    return s;
}

// Function with two integers and one float
float sum(int x, int y, float z) {
    float s = x + y + z;
    return s;
} Q1                                                                                 