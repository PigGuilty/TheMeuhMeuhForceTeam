#pragma strict

var playerHealth : int;       // Reference to the player's heatlh.
var enemy : GameObject;                // The enemy prefab to be spawned.
var spawnTime : float = 3f;            // How long between each spawn.
var spawnPoints : Transform[];         // An array of the spawn points this enemy can spawn from.
var life : TextMesh;


function Start ()
{
    playerHealth = IntParseFast(life.text);
    // Call the Spawn function after a delay of the spawnTime and then continue to call after the same amount of time.
    InvokeRepeating ("Spawn", spawnTime, spawnTime);
}


function Spawn ()
{
    // If the player has no health left...
    if(playerHealth <= 0f)
    {
        // ... exit the function.
        return;
    }

    // Find a random index between zero and one less than the number of spawn points.
    var spawnPointIndex : int = Random.Range (0, spawnPoints.Length);

    // Create an instance of the enemy prefab at the randomly selected spawn point's position and rotation.
    Instantiate (enemy, spawnPoints[spawnPointIndex].position, spawnPoints[spawnPointIndex].rotation);
}

function  IntParseFast( value : String) : int
    {
        var result : int = 0;
        for (var i = 0; i < value.Length; i++)
        {
            var letter : char = value[i];
            result = 10 * result + char.GetNumericValue(letter);
        }
        return result;
}