import java.util.*;
/**
 * Builds a HashMap to calculate the follows ArrayList for each possible WordGram only once, 
 * and then uses the HashMap to look at the list of characters following when it is needed.
 * 
 * @author Brienna Herold
 * @version Sat., Mar. 4, 2017
 */
public class EfficientMarkovWord implements IMarkovModel {
    private String[] myText;
    private Random myRandom;
    private int myOrder;
    private HashMap<WordGram, ArrayList<String>> map;
    
    public EfficientMarkovWord(int order) {
        myRandom = new Random();
        myOrder = order;
    }
    
    public void setRandom(int seed) {
        myRandom = new Random(seed);
    }
    
    public void setTraining(String text){
        myText = text.split("\\s+");
        buildHashMap();
        //printHashMapInfo();
    }
    
    /**
     * Looks for the first position from start that has words in the array words 
     * that match the WordGram target. If no match is found, returns -1.
     */
    private int indexOf(String[] words, WordGram target, int start) {
        for (int i = start; i < words.length - myOrder; i++) {
            WordGram word = new WordGram(words, i, myOrder);
            if (word.equals(target)) {
                return i;
            }
        }
        return -1;
    }
    
    /**
     * Returns an ArrayList of all the single words that immediately follow an
     * instance of the WordGram parameter somewhere in the training text
     */
    private ArrayList<String> getFollows(WordGram kGram) {
        return map.get(kGram);
    }
    
    /**
     * Generates and returns random text that has numWords words. Generates each word by 
     * randomly choosing a word from the training text that follows the current word(s) 
     * in the training text.
     */
    public String getRandomText(int numWords){
        // Initialize the random text to be returned
        StringBuilder sb = new StringBuilder();
        // Choose a random word to start with
        int index = myRandom.nextInt(myText.length - myOrder);
        // Create WordGram of size myOrder beginning at index
        WordGram key = new WordGram(myText, index, myOrder);
        sb.append(key);  // its toString method is auto called
        sb.append(" ");
        for(int k = 0; k < numWords - myOrder; k++){
            // Find all the words that follow this WordGram
            ArrayList<String> follows = getFollows(key);
            // System.out.println(key + ": " + follows);
            if (follows == null || follows.size() == 0) {
                break;
            }
            // Add to text a random word that follows this WordGram
            index = myRandom.nextInt(follows.size()); 
            String next = follows.get(index);
            sb.append(next);
            sb.append(" ");
            key = key.shiftAdd(next);
        }
        
        return sb.toString().trim();
    }
    
    private void buildHashMap() {  
        map = new HashMap<WordGram, ArrayList<String>>();
        // Loop over training text, keeping in mind size of WordGram
        for (int i = 0; i <= myText.length - myOrder; i++) {
            // Extract WordGram in increments
            WordGram word = new WordGram(myText, i, myOrder);
            // If that WordGram is not in the HashMap yet, then it should be put in mapped to an empty ArrayList
            if (!map.containsKey(word)) {
                map.put(word, new ArrayList<String>());
            }
            // Add following word to the WordGram's ArrayList in the map, if there is one
            if (i + myOrder < myText.length) {
                String follower = myText[i + myOrder];
                ArrayList<String> follows = map.get(word);
                follows.add(follower);
                map.put(word, follows);
            }
        }
    }
    
    private void printHashMapInfo() {
        // Print HashMap (only if it is small)
        System.out.println(map);
        // Print number of keys in HashMap
        System.out.println(map.size());
        // Print the size of the largest value in the HashMap
        int largest = 0; 
        for (WordGram word : map.keySet()) {
            int current = map.get(word).size();
            if (current > largest) {
                largest = current;
            }
        }
        System.out.println("Size of largest value in the HashMap: " + largest);
        // Print the keys that have the maximum size value
        for (WordGram word : map.keySet()) {
            if (map.get(word).size() == largest) {
                System.out.println("The keys that have the maximum size value and their follow words: ");
                System.out.println(word + " .... " + map.get(word));
            }
        }
    }
}
