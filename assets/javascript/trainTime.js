// (TEST 1)
    // First Train of the Day is 3:00 AM
    // Assume Train comes every 3 minutes.
    // Assume the current time is 3:16 AM....
    // What time would the next train be...? (Use your brain first)
    // It would be 3:18 -- 2 minutes away

    // Solved Mathematically               
    // Test case 1:                               var remainingMinutes = (currentTime minutes - firstTrain minutes)
    // 16 - 00 = 16                               
    // 16 % 3 = 1 (Modulus is the remainder)      var remainder = remainingMinutes%trainFrequency
    // 3 - 1 = 2 minutes away                     var minutesAway = trainFrequency - remainder
    // 2 + 3:16 = 3:18                            var arrivalTime = minutesAway + currentTime
    //                                            display minutesAway
    //                                            display arrivalTime