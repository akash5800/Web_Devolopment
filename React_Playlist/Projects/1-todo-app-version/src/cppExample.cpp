#include <iostream>
#include <vector>
#include <string>
#include <map>
#include <algorithm>

using namespace std;

int get_lis(const vector<int>& V) {
    if (V.empty()) {
        return 0;
    }

    vector<int> T; 

    for (int X : V) {
        auto it = lower_bound(T.begin(), T.end(), X);

        if (it == T.end()) {
            T.push_back(X);
        } else {
            *it = X;
        }
    }

    return T.size();
}

void process() {
    int N;
    if (!(cin >> N)) return;

    string S;
    cin >> S; 

    vector<string> Shuffled(N);
    getline(cin, S);

    for (int i = 0; i < N; ++i) {
        getline(cin, Shuffled[i]);
    }

    cin >> S; 

    map<string, int> FinalPos;
    getline(cin, S);
    
    for (int i = 0; i < N; ++i) {
        getline(cin, S);
        FinalPos[S] = i + 1; 
    }

    vector<int> PosSequence;
    for (const string& Instruction : Shuffled) {
        PosSequence.push_back(FinalPos[Instruction]);
    }

    int LISLen = get_lis(PosSequence);
    
    int MinOps = N - LISLen;

    cout << MinOps << endl;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    process();

    return 0;
}