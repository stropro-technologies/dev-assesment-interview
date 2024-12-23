using System;
using System.Collections.Generic;

namespace SampleApplication.Console;

class Program
{
    private static List<string> FindMostActiveCustomers(params List<string>[] logFiles)
    {
        throw new NotImplementedException();
    }

    private static List<string> FindMostLoyalCustomers(params List<string>[] logFiles)
    {
        throw new NotImplementedException();
    }

    static void Main(string[] args)
    {
        var logFileDay1 = new List<string>
        {
            "2024-12-22T10:15:00,PageA,Customer1,Session1",
            "2024-12-22T10:20:00,PageB,Customer1,Session2",
            "2024-12-22T10:30:00,PageB,Customer2,Session3",
            "2024-12-22T11:00:00,PageC,Customer3,Session4"
        };

        var logFileDay2 = new List<string>
        {
            "2024-12-23T09:10:00,PageA,Customer1,Session5",
            "2024-12-23T09:30:00,PageB,Customer1,Session6",
            "2024-12-23T09:50:00,PageB,Customer1,Session7",
            "2024-12-23T10:00:00,PageD,Customer3,Session8",
            "2024-12-23T10:20:00,PageE,Customer3,Session9"
        };

        var logFileDay3 = new List<string>
        {
            "2024-12-24T09:10:00,PageF,Customer3,Session10",
            "2024-12-24T09:30:00,PageG,Customer3,Session11",
            "2024-12-24T09:50:00,PageH,Customer3,Session12",
            "2024-12-24T10:00:00,PageI,Customer4,Session13",
            "2024-12-24T10:20:00,PageJ,Customer1,Session14"
        };

        var logFileDay4 = new List<string>
        {
            "2024-12-25T09:10:00,PageA,Customer4,Session5",
            "2024-12-25T09:30:00,PageB,Customer4,Session6",
            "2024-12-25T09:50:00,PageB,Customer1,Session7",
            "2024-12-25T10:00:00,PageD,Customer2,Session8",
            "2024-12-25T10:20:00,PageE,Customer2,Session9"
        };
        
        // Part 1: Find Most Active Customers
        var mostActiveCustomers = FindMostActiveCustomers(logFileDay1, logFileDay2, logFileDay3, logFileDay4);
        System.Console.WriteLine("Most Active Customers: " + string.Join(", ", mostActiveCustomers));

        // Part 2: Find Loyal Customers
        var loyalCustomers = FindMostLoyalCustomers(logFileDay1, logFileDay2, logFileDay3, logFileDay4);
        System.Console.WriteLine("Loyal Customers: " + string.Join(", ", loyalCustomers));
    }
}