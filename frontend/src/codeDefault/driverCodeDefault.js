export const java = `class Solution2 {

    public int[] plusOne(int[] digits) {
      for (int i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
          digits[i]++;
          return digits;
        }
        digits[i] = 0;
      }
      int res[] = new int[digits.length + 1];
      res[0] = 1;
      return res;
    }
  }
  
  public class Main {
  
    static Scanner sc = new Scanner(System.in);
    static ArrayList<ArrayList<int[]>> expected = null;
    static ArrayList<ArrayList<int[]>> userResults = null;
    static ArrayList<ArrayList<Boolean>> resultsBoolean = new ArrayList<>();
  
    public static void main(String[] args) {
      expected = new ArrayList<>();
      userResults = new ArrayList<>();
      int t = sc.nextInt();
      int count = 1;
      while (count <= t) {
        ArrayList<Boolean> arr = takeInput(count, new ArrayList<Boolean>());
        count++;
        resultsBoolean.add(arr);
      }
      boolean flag = true;
      for (int i = 0; i < resultsBoolean.size() && flag; i++) {
        ArrayList<Boolean> results = resultsBoolean.get(i);
        for (int j = 0; j < results.size() && flag; j++) {
          Boolean result = results.get(j);
          if (result == false) {
            
            flag = false;
          }
        }
      }
      if (flag) System.out.println(
        "Status : " + "Accepted"
      ); else System.out.println("Status : " + "Wrong Answer");
    }
  
    public static void printResult(int[] res) {
      System.out.print("[ ");
      for (int k = 0; k < res.length; k++) {
        System.out.print(res[k] + " ");
      }
      System.out.println("]");
    }
  
    public static ArrayList<Boolean> takeInput(int t, ArrayList<Boolean> res) {
      ArrayList<int[]> expected_result = new ArrayList<>();
      ArrayList<int[]> user_result = new ArrayList<>();
      int n = sc.nextInt();
      int count = 1;
      while (count <= n) {
        int size = sc.nextInt();
        int[] nums1 = new int[size];
        int[] nums2 = new int[size];
        for (int i = 0; i < size; i++) {
          nums1[i] = nums2[i] = sc.nextInt();
        }
        Solution2 sol1 = new Solution2();
        Solution sol2 = new Solution();
        int[] res1 = sol1.plusOne(nums1);
        expected_result.add(res1);
        int[] res2 = sol2.plusOne(nums2);
        user_result.add(res2);
        res.add(validate(res1, res2));
        System.out.println("Your Output :");
        output(res2);
        System.out.println();
        System.out.println("Expected Output : ");
        output(res1);
        System.out.println();
        count++;
      }
      expected.add(expected_result);
      userResults.add(user_result);
      return res;
    }
  
    public static void output(int[] nums) {
      for (int num : nums) System.out.print(num + " ");
      System.out.println();
    }
  
    public static Boolean validate(int[] res1, int[] res2) {
      if (res1.length != res2.length) {
        return false;
      }
      for (int i = 0; i < res1.length; i++) {
        if (res1[i] != res2[i]) return false;
      }
      return true;
    }
  }`;