import java.util.*;
/**
 * Write a description of MarkovOne here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class MarkovOne {
    private String myText;
	private Random myRandom;
	
	public MarkovOne() {
		myRandom = new Random();
	}
	
	public void setRandom(int seed){
		myRandom = new Random(seed);
	}
	
	public void setTraining(String s){
		myText = s.trim();
	}
	
	/**
	 * Predicts the next character, by finding all the characters that follow the current 
	 * character in the training text, and then randomly picking one of them as the next character.
	 */
	public String getRandomText(int numChars){
		if (myText == null) {
			return "";
		}
		StringBuilder sb = new StringBuilder();
		// WHY THE ONES???
		int index = myRandom.nextInt(myText.length() - 1);
		String key = myText.substring(index, index + 1);
		sb.append(key);
		// ABOVE THIS DON'T UNDERSTAND YET
		for(int k=0; k < numChars; k++){
		    // Find all characters that follow the current character
		    ArrayList<Character> follows = getFollows(key);
		    // Randomly pick one of them as the successor
		    index = myRandom.nextInt(follows.size());
		    char successor = follows.get(index);
			sb.append(successor);
			// Update key to successor 
			key = Character.toString(successor);
		}
		return sb.toString();
	}
	
	/**
	 * Finds all the characters from the private variable myText in MarkovOne that 
	 * follow key and puts all these characters into an ArrayList.
	 * @returns the ArrayList
	 */
	public ArrayList<Character> getFollows(String key) {
	    // NOTE: CHANGE CHARACTER TYPE TO STRING TYPE
	    ArrayList<Character> follows = new ArrayList<Character>();
	    // Loop through myText until no more characters are found
	    int pos = 0;
	    while (true) {
	        // Find indexes of key and succeeding character
	        int index = myText.indexOf(key, pos);
	        int indexOfSuccessor = index + key.length();
	        // Break if key isn't found or if successor index is greater than last index
	        if (index == -1 || indexOfSuccessor >= myText.length()) {
	            break;
	        }
	        // Add to ArrayList the character immediately after key
	        char successor = myText.charAt(indexOfSuccessor);
	        follows.add(successor);
	        // Update search position in myText
	        pos = index + 1;
	    }
	    return follows;
	}
	
	
}
