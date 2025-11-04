#include <bits/stdc++.h>

using namespace std;

int main() {
    string line;
    getline(cin, line);
    int N = stoi(line);
    getline(cin, line);
    vector<string> shuffled(N);
    for(int i = 0; i < N; i++) {
        getline(cin, shuffled[i]);
    }
    getline(cin, line);
    vector<string> original(N);
    for(int i = 0; i < N; i++) {
        getline(cin, original[i]);
    }
    map<string, int> pos;
    for(int i = 0; i < N; i++) {
        pos[original[i]] = i + 1;
    }
    vector<int> P(N);
    for(int i = 0; i < N; i++) {
        P[i] = pos[shuffled[i]];
    }
    vector<int> dp(N, 1);
    for(int i = 1; i < N; i++) {
        for(int j = 0; j < i; j++) {
            if(P[j] < P[i]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
    }
    int LIS = 0;
    for(int x : dp) LIS = max(LIS, x);
    cout << N - LIS << endl;
    return 0;
}
