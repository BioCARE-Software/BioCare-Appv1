int thumb, indexF, middle, ring, pinky;
if (sscanf(rxValue.c_str(), "%d,%d,%d,%d,%d", &thumb, &indexF, &middle, &ring, &pinky) == 5)
{
    Serial.printf("Received: Thumb=%d, Index=%d, Middle=%d, Ring=%d, Pinky=%d\n",
                  thumb, indexF, middle, ring, pinky);

    // Map 0-100 to servo angles 0-180 and write to the 5 servos we have fpr the arm
}
else
{
    Serial.println("Invalid data format received");
}
