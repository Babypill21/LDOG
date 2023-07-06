(this["webpackJsonpdoge-main"] = this["webpackJsonpdoge-main"] || []).push([
    [0], {
        137: function(e, t, n) {},
        167: function(e, t, n) {},
        171: function(e, t, n) {},
        173: function(e, t, n) {},
        229: function(e, t, n) {},
        238: function(e, t, n) {},
        239: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"newOperatorAddress","type":"address"},{"internalType":"string","name":"newPriceSource","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BetBear","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BetBull","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"roundBuffer","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"roundInterval","type":"uint256"}],"name":"BufferAndIntervalSecondsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"CancelRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"ContractPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"ContractPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"ContractUnpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"ContractUnpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"int256","name":"price","type":"int256"},{"indexed":false,"internalType":"uint32","name":"timestamp","type":"uint32"}],"name":"EndRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bullAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bearAmount","type":"uint256"}],"name":"HouseBetMade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minRatioPercents","type":"uint256"}],"name":"HouseBetMinRatioUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"InjectFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"int256","name":"price","type":"int256"},{"indexed":false,"internalType":"uint32","name":"timestamp","type":"uint32"}],"name":"LockRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minBetAmount","type":"uint256"}],"name":"MinBetAmountUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"priceSource","type":"string"}],"name":"NewPriceSource","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newContract","type":"address"}],"name":"NewReferralsContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardRate","type":"uint256"}],"name":"RewardRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardBaseCalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"name":"RewardsCalculated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"StartRound","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"Bets","outputs":[{"internalType":"enum DogeBetsPredictionV1.Position","name":"position","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"IsPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OwnershipRenounce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"ReferralRewardsAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Rounds","outputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"uint256","name":"bullAmount","type":"uint256"},{"internalType":"uint256","name":"bearAmount","type":"uint256"},{"internalType":"uint256","name":"rewardBaseCalAmount","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"int256","name":"lockPrice","type":"int256"},{"internalType":"int256","name":"closePrice","type":"int256"},{"internalType":"uint32","name":"startTimestamp","type":"uint32"},{"internalType":"uint32","name":"lockTimestamp","type":"uint32"},{"internalType":"uint32","name":"closeTimestamp","type":"uint32"},{"internalType":"uint32","name":"lockPriceTimestamp","type":"uint32"},{"internalType":"uint32","name":"closePriceTimestamp","type":"uint32"},{"internalType":"bool","name":"closed","type":"bool"},{"internalType":"bool","name":"canceled","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newContractAddress","type":"address"}],"name":"SetReferralsContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"UserBets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockedOnce","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBetAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operatorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceSource","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referralsContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"roundBuffer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"roundInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startedOnce","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"user_ReferralFundsClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operatorAddress","type":"address"}],"name":"SetOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"FundsInject","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"FundsExtract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"RewardUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"BlackListInsert","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"BlackListRemove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newPriceSource","type":"string"}],"name":"ChangePriceSource","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bullAmount","type":"uint256"},{"internalType":"uint256","name":"bearAmount","type":"uint256"}],"name":"HouseBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"Pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"Unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"RoundStart","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"price","type":"int256"},{"internalType":"uint32","name":"timestamp","type":"uint32"}],"name":"RoundLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"price","type":"int256"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint256","name":"betOnBull","type":"uint256"},{"internalType":"uint256","name":"betOnBear","type":"uint256"}],"name":"Execute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"bool","name":"closed","type":"bool"}],"name":"RoundCancel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"roundBufferSeconds","type":"uint256"},{"internalType":"uint256","name":"roundIntervalSeconds","type":"uint256"}],"name":"SetRoundBufferAndInterval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minBearToBullRatioPercents","type":"uint256"}],"name":"SetHouseBetMinRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRewardRate","type":"uint256"}],"name":"SetRewardRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMinBetAmount","type":"uint256"}],"name":"SetMinBetAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"address","name":"newReferrer","type":"address"}],"name":"user_BetBullSpecial","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"user_BetBull","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"address","name":"newReferrer","type":"address"}],"name":"user_BetBearSpecial","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"user_BetBear","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"epochs","type":"uint256[]"}],"name":"user_Claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"GetUserRounds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"components":[{"internalType":"enum DogeBetsPredictionV1.Position","name":"position","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"internalType":"struct DogeBetsPredictionV1.BetInfo[]","name":"","type":"tuple[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"GetUserRoundsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"Claimable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"Refundable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"betBull","type":"uint256"},{"internalType":"uint256","name":"betBear","type":"uint256"}],"name":"HouseBetsWithinLimits","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentSettings","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentBlockTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')
        },
        240: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address[]","name":"predictionsContracts","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"OwnershipRenounce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxReferralFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referralFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralMasterToSlaves","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralSlaveToMaster","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFeeInTenthOfPercent","type":"uint256"}],"name":"SetReferralFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"DisableReferralFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"}],"name":"WhitelistContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"}],"name":"IsWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user1","type":"address"},{"internalType":"address","name":"user2","type":"address"}],"name":"AreAlreadyConnected","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"IsAlreadyReferred","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referredUser","type":"address"}],"name":"GetReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"betSize","type":"uint256"}],"name":"CalculateReferralReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"ReferTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"GetReferrals","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address[]","name":"walletsReferredByUser","type":"address[]"}],"name":"SetReferrals","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        382: function(e, t, n) {},
        383: function(e, t, n) {},
        384: function(e, t, n) {},
        385: function(e, t, n) {},
        393: function(e, t, n) {},
        419: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"newOperatorAddress","type":"address"},{"internalType":"string","name":"newPriceSource","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BetBear","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BetBull","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"roundBuffer","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"roundInterval","type":"uint256"}],"name":"BufferAndIntervalSecondsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"CancelRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"ContractPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"ContractPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"ContractUnpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"ContractUnpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"int256","name":"price","type":"int256"},{"indexed":false,"internalType":"uint32","name":"timestamp","type":"uint32"}],"name":"EndRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bullAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bearAmount","type":"uint256"}],"name":"HouseBetMade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minRatioPercents","type":"uint256"}],"name":"HouseBetMinRatioUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"InjectFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"int256","name":"price","type":"int256"},{"indexed":false,"internalType":"uint32","name":"timestamp","type":"uint32"}],"name":"LockRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minBetAmount","type":"uint256"}],"name":"MinBetAmountUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"priceSource","type":"string"}],"name":"NewPriceSource","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardRate","type":"uint256"}],"name":"RewardRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardBaseCalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"name":"RewardsCalculated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"StartRound","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"Bets","outputs":[{"internalType":"enum DogeBetsPredictionV1.Position","name":"position","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"BlackListInsert","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"BlackListRemove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newPriceSource","type":"string"}],"name":"ChangePriceSource","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"Claimable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"FundsExtract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"FundsInject","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"GetUserRounds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"components":[{"internalType":"enum DogeBetsPredictionV1.Position","name":"position","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"internalType":"struct DogeBetsPredictionV1.BetInfo[]","name":"","type":"tuple[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"GetUserRoundsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bullAmount","type":"uint256"},{"internalType":"uint256","name":"bearAmount","type":"uint256"}],"name":"HouseBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"betBull","type":"uint256"},{"internalType":"uint256","name":"betBear","type":"uint256"}],"name":"HouseBetsWithinLimits","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"IsPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OwnershipRenounce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"Pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"Refundable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"RewardUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"bool","name":"closed","type":"bool"}],"name":"RoundCancel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"price","type":"int256"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint256","name":"betOnBull","type":"uint256"},{"internalType":"uint256","name":"betOnBear","type":"uint256"}],"name":"RoundExecute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"price","type":"int256"},{"internalType":"uint32","name":"timestamp","type":"uint32"}],"name":"RoundLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"RoundStart","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Rounds","outputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"uint256","name":"bullAmount","type":"uint256"},{"internalType":"uint256","name":"bearAmount","type":"uint256"},{"internalType":"uint256","name":"rewardBaseCalAmount","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"int256","name":"lockPrice","type":"int256"},{"internalType":"int256","name":"closePrice","type":"int256"},{"internalType":"uint32","name":"startTimestamp","type":"uint32"},{"internalType":"uint32","name":"lockTimestamp","type":"uint32"},{"internalType":"uint32","name":"closeTimestamp","type":"uint32"},{"internalType":"uint32","name":"lockPriceTimestamp","type":"uint32"},{"internalType":"uint32","name":"closePriceTimestamp","type":"uint32"},{"internalType":"bool","name":"closed","type":"bool"},{"internalType":"bool","name":"canceled","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"minBearToBullRatioPercents","type":"uint256"}],"name":"SetHouseBetMinRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMinBetAmount","type":"uint256"}],"name":"SetMinBetAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operatorAddress","type":"address"}],"name":"SetOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRewardRate","type":"uint256"}],"name":"SetRewardRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"roundBufferSeconds","type":"uint256"},{"internalType":"uint256","name":"roundIntervalSeconds","type":"uint256"}],"name":"SetRoundBufferAndInterval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"Unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"UserBets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentBlockTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentSettings","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockedOnce","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBetAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimumRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operatorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceSource","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"roundBuffer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"roundInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startedOnce","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"user_BetBear","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"}],"name":"user_BetBull","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"epochs","type":"uint256[]"}],"name":"user_Claim","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        432: function(e, t) {},
        435: function(e, t) {},
        437: function(e, t) {},
        441: function(e, t) {},
        465: function(e, t) {},
        467: function(e, t) {},
        476: function(e, t) {},
        478: function(e, t) {},
        489: function(e, t) {},
        49: function(e, t, n) {},
        491: function(e, t) {},
        606: function(e, t) {},
        608: function(e, t) {},
        615: function(e, t) {},
        616: function(e, t) {},
        640: function(e, t) {},
        647: function(e, t) {},
        697: function(e, t) {},
        722: function(e, t, n) {},
        724: function(e, t, n) {},
        725: function(e, t, n) {},
        726: function(e, t, n) {},
        735: function(e, t, n) {},
        736: function(e, t, n) {},
        737: function(e, t) {},
        854: function(e, t, n) {},
        855: function(e, t, n) {},
        856: function(e, t, n) {},
        857: function(e, t, n) {},
        871: function(e, t, n) {},
        872: function(e, t, n) {},
        873: function(e, t, n) {},
        875: function(e, t, n) {},
        876: function(e, t, n) {},
        877: function(e, t, n) {},
        878: function(e, t, n) {},
        879: function(e, t, n) {},
        880: function(e, t, n) {},
        881: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(1),
                r = n.n(a),
                s = n(119),
                i = n.n(s),
                c = n(23),
                o = n(24),
                u = n(9),
                l = n(57),
                d = n(20),
                p = n(888),
                b = n(59),
                m = n(147),
                h = (n(237), n(7)),
                f = n(8),
                j = n(11),
                y = n(12),
                x = n(4),
                v = n(2),
                O = n.n(v),
                w = (n(238), {
                    doge: {
                        testnet: n(239),
                        mainnet: n(239),
                        mainnet_old: n(419)
                    },
                    referrals: {
                        testnet: n(240),
                        mainnet: n(240)
                    }
                }),
                g = window.dogebets = {
                    web3: null,
                    web3rpc: null,
                    userBalance: {
                        wei: 0,
                        ether: 0
                    },
                    currentChainID: null
                },
                k = "dogebets_",
                B = function() {
                    try {
                        return window.self !== window.top
                    } catch (e) {
                        return !0
                    }
                }(),
                T = Boolean(Number("1")),
                N = {
                    testnet: "0xAE01C6a87CeB23874b8Dc8Fa7DCB926e641A1277",
                    mainnet_old: "0x7B43d384fD83c8317415abeeF234BaDec285562b",
                    mainnet: "0x76f2c7c0DeDca9B693630444a9526e95B3A6918e"
                },
                S = {
                    testnet: "0x70bBD4fa9d768379d70267C9Ec21627d108F89b8",
                    mainnet: "0x6D9dFe3aD151E47681380Bd9ec04A9d6ED51E129"
                },
                C = {
                    mainnet: ["https://bsc-dataseed2.binance.org:443", "https://bsc-dataseed1.binance.org:443"],
                    testnet: ["https://data-seed-prebsc-1-s1.binance.org:8545", "https://data-seed-prebsc-1-s2.binance.org:8545"]
                },
                P = {
                    mainnet: "https://bscscan.com/tx/",
                    testnet: "https://testnet.bscscan.com/tx/"
                },
                D = T ? 56 : 97,
                I = "https://t.me/dogebets",
                M = Object.freeze({
                    bull: 0,
                    bear: 1
                }),
                R = getComputedStyle(document.querySelector("html")),
                A = R.getPropertyValue("--color-bull-green"),
                E = R.getPropertyValue("--color-bear-red"),
                F = R.getPropertyValue("--color-theme-white"),
                L = R.getPropertyValue("--color-menu-purple"),
                W = {
                    valid: ["f930db26da5747f78c48bec5f3ac0a52e941cd150b366bafeedd5f1501d314e5", "PissWasser", "LuftWaffe"],
                    revoked: []
                };

            function H() {
                var e = new URLSearchParams(window.location.search).get("dev");
                return !!W.valid.includes(e)
            }

            function U(e) {
                var t = z(e);
                t.debugNotification ? alert(t.debugNotification) : alert(t.notification), console.log(t.console)
            }

            function z(e) {
                return G.Parse(e)
            }
            var G = new(function() {
                    function e() {
                        Object(h.a)(this, e)
                    }
                    return Object(f.a)(e, [{
                        key: "Parse",
                        value: function(e) {
                            if (!e) throw new SyntaxError("Missing required argument: error; nothing to parse!");
                            var t = {
                                notification: null,
                                debugNotification: null,
                                console: null
                            };
                            return 4001 == e.code || "User rejected the transaction" === e.message ? (t.console = "User rejected transaction", t.notification = "Operation canceled by user!") : 4200 == e.code ? (t.console = "Trustwallet error; code: " + e.code, t.notification = "Unknown TrustWallet error", t.debugNotification = e.message) : "User canceled" === e.message ? (t.console = "User rejected transaction", t.notification = "Canceled by user") : "Unexpected end of JSON input" === e.message ? (t.console = "We are either offline or our RPC is glitching out", t.notification = "Lost connection with WalletConnect", t.debugNotification = "You appear to be offline; check your internet connection") : "User closed modal" === e.message ? (t.console = "User closed WalletConnect modal", t.notification = "Connection via WC rejected") : "Internal JSON-RPC error." === e.message ? (t.console = "Mobile application seems to have bugged out", t.notification = "App connection error", t.debugNotification = "Looks like you're using Metamask with WalletConnect and it bugged out") : e.message.includes("Transaction has been reverted") ? (t.console = "Transaction reverted by the blockchain", t.notification = "Transaction failed") : (t.console = "Error, whole, repeated: " + e + "\nError, message: " + e.message + "\nError, code: " + e.code + "Error, keys: " + Object.keys(e), e.receipt && console.log(e.receipt), t.notification = "Unknown Wallet error", t.debugNotification = (e.message, e.code)), t
                        }
                    }]), e
                }()),
                V = n(54),
                Y = n.n(V);

            function Q() {
                window.innerWidth;
                var e = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
                    t = !window.screen.orientation;
                if (t && e) return !0;
                if (t) return !1;
                var n = 0 !== window.screen.orientation.angle,
                    a = /portrait/i.test(window.screen.orientation.type);
                return n && !a || !n && a
            }

            function K() {
                return !(window.ethereum || window.web3)
            }

            function q() {
                var e;
                switch (D) {
                    case 56:
                        e = new Y.a(new Y.a.providers.HttpProvider(C.mainnet[0]));
                        break;
                    case 97:
                        e = new Y.a(new Y.a.providers.HttpProvider(C.testnet[0]));
                        break;
                    default:
                        throw new RangeError("Unexpected chainID: " + D)
                }
                return e
            }

            function J() {
                return X.apply(this, arguments)
            }

            function X() {
                return (X = Object(x.a)(O.a.mark((function e() {
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!K()) {
                                    e.next = 3;
                                    break
                                }
                                return ae(), e.abrupt("return", !1);
                            case 3:
                                return e.prev = 3, e.next = 6, window.ethereum.request({
                                    method: "eth_requestAccounts"
                                });
                            case 6:
                                e.next = 26;
                                break;
                            case 8:
                                if (e.prev = 8, e.t0 = e.catch(3), 4001 != e.t0.code) {
                                    e.next = 15;
                                    break
                                }
                                return alert("Connect request rejected by user"), e.abrupt("return", !1);
                            case 15:
                                if (4200 != e.t0.code) {
                                    e.next = 22;
                                    break
                                }
                                return alert("Generic TrustWallet error;\nif you need to get support\nget next messages to the TG group:\n" + {
                                    telegramGroupLink: I
                                }), alert("Message: " + e.t0.message + "\nCode: " + e.t0.code), H() && U(e.t0), e.abrupt("return", !1);
                            case 22:
                                return alert("Generic connection error;\nif you need to get support\nget next messages to the TG group:\n" + {
                                    telegramGroupLink: I
                                }), alert("Message: " + e.t0.message + "\nCode: " + e.t0.code), H() && U(e.t0), e.abrupt("return", !1);
                            case 26:
                                return e.abrupt("return", !0);
                            case 27:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [3, 8]
                    ])
                })))).apply(this, arguments)
            }

            function Z() {
                return !!K() || g.currentChainID == D
            }

            function _(e) {
                return $.apply(this, arguments)
            }

            function $() {
                return ($ = Object(x.a)(O.a.mark((function e(t) {
                    var n, a;
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 9;
                                    break
                                }
                                if (!K() && g.web3) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", !0);
                            case 3:
                                return e.next = 5, g.web3.eth.net.getId();
                            case 5:
                                return n = e.sent, e.abrupt("return", n == D);
                            case 9:
                                return e.next = 11, t.eth.net.getId();
                            case 11:
                                return a = e.sent, e.abrupt("return", a == D);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ee() {
                return te.apply(this, arguments)
            }

            function te() {
                return te = Object(x.a)(O.a.mark((function e() {
                    var t, n, a = arguments;
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                t = a.length > 0 && void 0 !== a[0] ? a[0] : D, e.t0 = t, e.next = 97 === e.t0 ? 4 : 56 === e.t0 ? 6 : 8;
                                break;
                            case 4:
                                return n = [{
                                    chainId: "0x61",
                                    chainName: "Binance Smart Chain Testnet",
                                    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
                                    nativeCurrency: {
                                        name: "BINANCE COIN",
                                        symbol: "tBNB",
                                        decimals: 18
                                    },
                                    blockExplorerUrls: ["https://testnet.bscscan.com/"]
                                }], e.abrupt("break", 9);
                            case 6:
                                return n = [{
                                    chainId: "0x38",
                                    chainName: "Binance Smart Chain",
                                    rpcUrls: ["https://bsc-dataseed1.binance.org"],
                                    nativeCurrency: {
                                        name: "BINANCE COIN",
                                        symbol: "BNB",
                                        decimals: 18
                                    },
                                    blockExplorerUrls: ["https://bscscan.com/"]
                                }], e.abrupt("break", 9);
                            case 8:
                                return e.abrupt("break", 9);
                            case 9:
                                return e.abrupt("return", window.ethereum.request({
                                    method: "wallet_addEthereumChain",
                                    params: n
                                }));
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), te.apply(this, arguments)
            }

            function ne(e) {
                if (!e) throw new SyntaxError("Missing required argument: figureInWei");
                var t;
                switch (typeof e) {
                    case "number":
                        t = Math.round(e) / Math.pow(10, 18);
                        break;
                    case "string":
                        t = Math.round(Number.parseFloat(e)) / Math.pow(10, 18);
                        break;
                    default:
                        throw new TypeError("figureInWei has to be either 'string' or 'number'")
                }
                return t
            }

            function ae() {
                B && Q() ? alert("No crypto wallet found in your browser.\nUse WalletConnect or try playing directly from our site, www.dogebets.gg") : alert("Please install MetaMask in order to use this site\nGo to https://t.me/dogebets if you need any help")
            }

            function re() {
                alert("Please connect your Metamask account\nYou can do this by pressing the 'Connect' button,\navailable from the menu in the top right corner")
            }

            function se() {
                alert("Your Metamask is connected to the wrong network\nYou should connect to Binance Smart Chain\nGo to https://t.me/dogebets if you need any help")
            }

            function ie() {
                alert("You need to add this network to Metamask\nIn order to be able to use this site!\nPlease press 'Connect'('Change Net') button again,\nadd this network and reload the page")
            }
            var ce = function() {
                    function e(t) {
                        Object(h.a)(this, e), this.UpdateWeb3Instances(t)
                    }
                    return Object(f.a)(e, [{
                        key: "user",
                        get: function() {
                            return this.contractUser
                        }
                    }, {
                        key: "rpc",
                        get: function() {
                            return this.contractRPC
                        }
                    }, {
                        key: "contractAddress",
                        get: function() {
                            return T ? N.mainnet : N.testnet
                        }
                    }, {
                        key: "contractABI",
                        get: function() {
                            return T ? w.doge.mainnet : w.doge.testnet
                        }
                    }, {
                        key: "UpdateWeb3Instances",
                        value: function(e) {
                            if (!e) throw new SyntaxError("missing required argument: web3Data");
                            if (!e.web3 && !e.web3rpc) throw new SyntaxError("Either web3Data.web3user or web3Data.web3rpc is required!");
                            e.web3rpc && (this.web3rpc = e.web3rpc), e.web3 && (this.web3user = e.web3), this.UpdateContracts()
                        }
                    }, {
                        key: "UpdateContracts",
                        value: function() {
                            this.web3rpc && (this.contractRPC = new this.web3rpc.eth.Contract(this.contractABI, this.contractAddress)), this.web3user && (this.contractUser = new this.web3user.eth.Contract(this.contractABI, this.contractAddress))
                        }
                    }]), e
                }(),
                oe = function(e) {
                    Object(j.a)(n, e);
                    var t = Object(y.a)(n);

                    function n(e) {
                        return Object(h.a)(this, n), t.call(this, e)
                    }
                    return Object(f.a)(n, [{
                        key: "contractAddress",
                        get: function() {
                            return T ? N.mainnet_old : null
                        }
                    }, {
                        key: "contractABI",
                        get: function() {
                            return T ? w.doge.mainnet_old : null
                        }
                    }]), n
                }(ce),
                ue = (n.p, n.p + "static/media/BNBwhite.a6ea96d4.svg"),
                le = n(42),
                de = n(149),
                pe = Object(de.a)("contract"),
                be = Object(de.a)("decimals"),
                me = Object(de.a)("roundDuration"),
                he = Object(de.a)("priceURL"),
                fe = function() {
                    function e(t, n) {
                        Object(h.a)(this, e), Object.defineProperty(this, pe, {
                            writable: !0,
                            value: null
                        }), Object.defineProperty(this, be, {
                            writable: !0,
                            value: null
                        }), Object.defineProperty(this, me, {
                            writable: !0,
                            value: null
                        }), Object.defineProperty(this, he, {
                            writable: !0,
                            value: null
                        }), this.currentPrice = null, Object(le.a)(this, pe)[pe] = t.rpc, Object(le.a)(this, be)[be] = n, this.FetchPriceURL(), this.FetchRoundDuration()
                    }
                    return Object(f.a)(e, [{
                        key: "FetchPriceURL",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (Object(le.a)(this, pe)[pe]) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, Object(le.a)(this, pe)[pe].methods.priceSource().call();
                                        case 4:
                                            Object(le.a)(this, he)[he] = e.sent;
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "FetchRoundDuration",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (Object(le.a)(this, pe)[pe]) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, Object(le.a)(this, pe)[pe].methods.roundInterval().call();
                                        case 4:
                                            Object(le.a)(this, me)[me] = e.sent;
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "FetchCurrentPrice",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                var t, n, a, r;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (Object(le.a)(this, he)[he]) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return t = {
                                                method: "GET",
                                                headers: {}
                                            }, e.next = 5, fetch(Object(le.a)(this, he)[he], t);
                                        case 5:
                                            return n = e.sent, e.next = 8, n.json();
                                        case 8:
                                            a = e.sent, r = Number(a.price).toFixed(Object(le.a)(this, be)[be]), this.currentPrice = r;
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "GetRoundDuration",
                        value: function() {
                            return Object(le.a)(this, me)[me]
                        }
                    }, {
                        key: "GetRoundDurationFormatted",
                        value: function() {
                            if (!Object(le.a)(this, me)[me]) return 0;
                            var e = Object(le.a)(this, me)[me],
                                t = Math.floor(e / 60),
                                n = e - Math.abs(60 * t);
                            return t + "m" + (n = 0 === n ? "" : n < 10 ? ":0" + n + "s" : ":" + n + "s")
                        }
                    }]), e
                }(),
                je = r.a.createContext({
                    web3Data: {
                        web3: void 0,
                        web3rpc: void 0,
                        address: void 0
                    },
                    SetWeb3Data: function() {}
                }),
                ye = r.a.createContext({
                    contract: null,
                    contractReferrals: null,
                    decimalPlaces: null,
                    tickerSymbol: null,
                    logo: null,
                    helper: null
                }),
                xe = r.a.createContext({
                    historySettings: {
                        entriesPerPage: null,
                        maxPagesToShow: null,
                        totalLength: null,
                        currentPage: null
                    },
                    SetHistorySettings: function() {}
                }),
                ve = r.a.createContext({
                    mobile: null
                });

            function Oe(e) {
                if (!e) throw new SyntaxError("Missing required argument: web3Data");
                var t = new ce(e);
                return {
                    contract: t,
                    contractReferrals: ke(e),
                    decimalPlaces: 2,
                    tickerSymbol: "BNB",
                    logo: ue,
                    helper: new fe(t, 2)
                }
            }

            function we(e) {
                if (!e) throw new SyntaxError("Missing required argument: web3Data");
                var t = new oe(e);
                return {
                    contract: t,
                    decimalPlaces: 2,
                    tickerSymbol: "BNB",
                    logo: ue,
                    helper: new fe(t, 2)
                }
            }
            var ge = {
                entriesPerPage: 6,
                maxPagesToShow: 7,
                totalLength: -1,
                currentPage: 1
            };

            function ke(e) {
                if (!e) throw new SyntaxError("Missing required argument: web3Data");
                return T ? new e.web3rpc.eth.Contract(w.referrals.mainnet, S.mainnet) : new e.web3rpc.eth.Contract(w.referrals.testnet, S.testnet)
            }
            var Be = n.p + "static/media/MetaMask.e9cfa6f2.svg",
                Te = n.p + "static/media/TrustWallet.ec6c1a87.svg",
                Ne = n.p + "static/media/WalletConnect.bd8aa632.svg",
                Se = (n(137), n(167), n(722), n(0)),
                Ce = function(e) {
                    Object(j.a)(n, e);
                    var t = Object(y.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "isMobile",
                        get: function() {
                            return this.context
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(Se.jsx)("div", {
                                className: "connect popup",
                                children: Object(Se.jsxs)("div", {
                                    className: "content" + (this.isMobile ? " mobile" : ""),
                                    children: [Object(Se.jsxs)("div", {
                                        id: "header",
                                        children: [Object(Se.jsx)("h2", {
                                            children: "Connect Wallet"
                                        }), Object(Se.jsx)("button", {
                                            id: "close",
                                            onClick: this.props.closePopup,
                                            children: "X"
                                        })]
                                    }), Object(Se.jsxs)("div", {
                                        id: "buttons",
                                        className: "noselect",
                                        children: [Object(Se.jsxs)("div", {
                                            onClick: this.props.connectMM,
                                            children: [Object(Se.jsx)("img", {
                                                id: "Metamask",
                                                src: Be,
                                                alt: "MetaMask"
                                            }), Object(Se.jsx)("p", {
                                                children: "Metamask"
                                            })]
                                        }), Object(Se.jsxs)("div", {
                                            onClick: this.props.connectMM,
                                            children: [Object(Se.jsx)("img", {
                                                id: "TrustWallet",
                                                src: Te,
                                                alt: "TrustWallet"
                                            }), Object(Se.jsx)("p", {
                                                children: "TrustWallet"
                                            })]
                                        }), Object(Se.jsxs)("div", {
                                            onClick: this.props.connectWC,
                                            children: [Object(Se.jsx)("img", {
                                                id: "WalletConnect",
                                                src: Ne,
                                                alt: "WalletConnect"
                                            }), Object(Se.jsx)("p", {
                                                children: "WalletConnect"
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }
                    }]), n
                }(r.a.Component);
            Ce.contextType = ve;
            n(724);
            var Pe = function(e) {
                Object(j.a)(n, e);
                var t = Object(y.a)(n);

                function n() {
                    return Object(h.a)(this, n), t.apply(this, arguments)
                }
                return Object(f.a)(n, [{
                    key: "isMobile",
                    get: function() {
                        return this.context
                    }
                }, {
                    key: "render",
                    value: function() {
                        return Object(Se.jsx)("div", {
                            className: "disconnect popup",
                            children: Object(Se.jsxs)("div", {
                                className: "content" + (this.isMobile ? " mobile" : ""),
                                children: [Object(Se.jsxs)("div", {
                                    id: "header",
                                    children: [Object(Se.jsx)("h2", {
                                        children: "Disconnect Wallet"
                                    }), Object(Se.jsx)("button", {
                                        id: "close",
                                        onClick: this.props.closePopup,
                                        children: "X"
                                    })]
                                }), Object(Se.jsx)("div", {
                                    id: "buttons",
                                    className: "noselect",
                                    children: Object(Se.jsx)("div", {
                                        onClick: this.props.disconnect,
                                        children: Object(Se.jsx)("p", {
                                            children: "Disconnect"
                                        })
                                    })
                                })]
                            })
                        })
                    }
                }]), n
            }(r.a.Component);
            Pe.contextType = ve;
            n(725);
            var De = function(e) {
                    var t = Object(a.useContext)(ve),
                        n = Object(a.useState)(!1),
                        r = Object(u.a)(n, 2),
                        s = r[0],
                        i = r[1];
                    return Object(a.useEffect)((function() {
                        var t = e.delay ? e.delay : 2e3,
                            n = setTimeout((function() {
                                return i(!0)
                            }), t);
                        return function() {
                            clearTimeout(n)
                        }
                    }), [e.delay]), s ? null : Object(Se.jsx)("div", {
                        className: "popup loading",
                        children: Object(Se.jsxs)("div", {
                            className: "content" + (t ? " mobile" : ""),
                            children: [Object(Se.jsx)("h1", {
                                children: "Loading..."
                            }), Object(Se.jsxs)("div", {
                                className: "loading-ring",
                                children: [Object(Se.jsx)("div", {}), Object(Se.jsx)("div", {}), Object(Se.jsx)("div", {}), Object(Se.jsx)("div", {})]
                            })]
                        })
                    })
                },
                Ie = (n(726), function(e) {
                    Object(j.a)(n, e);
                    var t = Object(y.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "isMobile",
                        get: function() {
                            return this.context
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.isShown ? Object(Se.jsx)("div", {
                                className: "popup generic",
                                children: Object(Se.jsxs)("div", {
                                    className: "content" + (this.isMobile ? " mobile" : ""),
                                    children: [Object(Se.jsxs)("div", {
                                        id: "header",
                                        children: [Object(Se.jsx)("h2", {
                                            children: "Referral link"
                                        }), Object(Se.jsx)("button", {
                                            id: "close",
                                            onClick: this.props.closePopup,
                                            children: "X"
                                        })]
                                    }), Object(Se.jsx)("div", {
                                        children: this.props.content
                                    })]
                                })
                            }) : null
                        }
                    }]), n
                }(r.a.Component));
            Ie.contextType = ve;
            var Me, Re, Ae, Ee, Fe = n.p + "static/media/Prediction-01.1f5193f9.svg",
                Le = n.p + "static/media/History.9104442d.svg",
                We = n.p + "static/media/referrals.10f1d843.svg",
                He = n.p + "static/media/chart.c6d8c11d.svg",
                Ue = n.p + "static/media/FAQ.79227881.svg",
                ze = n.p + "static/media/social.6a5311b2.svg",
                Ge = (n.p, n.p + "static/media/logo.202731b5.svg"),
                Ve = (n(49), Object(b.a)(c.c)(Me || (Me = Object(l.a)(["\n  width: 2.5rem;\n  text-decoration: none;\n  p {\n    text-decoration: none;\n    text-shadow: 2px 2px 2px black;\n    font-size: 10px;\n    width: 100%;\n    color: white;\n    opacity: 0%;\n    transition: all 350ms ease;\n    transform: scale(1) translateX(0rem) translatey(0rem) ;\n  }\n  img {\n    transform: scale(1) translateX(0rem) rotateX(0deg);\n    width: 100%;\n    height: auto;\n    \n    transition: all 350ms ease;\n  }\n\n&:hover {\n  img {\n    \n    transform: scale(2.5) translateX(0.8rem) rotatey(360deg);\n    \n  }\n  p {\n   \n    transform: scale(2) translateX(1.2rem) translatey(0.2rem);\n    opacity: 100%;\n    \n  }\n}\n    \n  \n"])))),
                Ye = function() {
                    var e = Object(a.useState)(!0),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        r = t[1];
                    return Object(Se.jsx)(Ve, {
                        clicked: n,
                        onClick: function() {
                            return r(!1)
                        },
                        exact: !0,
                        activeClassName: "Dogeactive",
                        to: "/flip",
                        children: Object(Se.jsxs)("div", {
                            children: [" ", Object(Se.jsx)("img", {
                                className: "dogebetscoin",
                                src: Ge,
                                alt: "logo"
                            }), Object(Se.jsx)("div", {
                                className: "flipme",
                                children: Object(Se.jsx)("p", {
                                    children: "Flip Me!"
                                })
                            })]
                        })
                    })
                },
                Qe = (n(735), b.a.button(Re || (Re = Object(l.a)(['\n  background-color: var(--color-background-black);\n  border: none;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  margin: 0.5rem 0 0 0.5rem;\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: relative;\n\n  &::before,\n  &::after {\n    content: "";\n    background-color: var(--color-theme-gold);\n    height: 2px;\n    width: 1rem;\n    position: absolute;\n    transition: all 500ms ease;\n  }\n\n  &::before {\n    top: ', ";\n    transform: ", ";\n  }\n\n  &::after {\n    top: ", ";\n    transform: ", ";\n  }\n"])), (function(e) {
                    return e.clicked ? "1.5" : "1rem"
                }), (function(e) {
                    return e.clicked ? "rotate(135deg)" : "rotate(0)"
                }), (function(e) {
                    return e.clicked ? "1.2" : "1.5rem"
                }), (function(e) {
                    return e.clicked ? "rotate(-135deg)" : "rotate(0)"
                }))),
                Ke = b.a.ul(Ae || (Ae = Object(l.a)(["\n  color: var(--color-theme-white);\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: var(--gradient-navbar-bg);\n\n  padding: 2rem 0;\n  z-index: 9;\n  position: absolute;\n  top: 6rem;\n  left: 0;\n\n  width: ", ";\n  transition: all 0.5s ease;\n  border-radius: 0 30px 30px 0;\n"])), (function(e) {
                    return e.clicked ? "12rem" : "3.5rem"
                })),
                qe = b.a.span(Ee || (Ee = Object(l.a)(["\n  width: ", ";\n  overflow: hidden;\n  margin-left: ", ";\n  transition: all 0.3s ease;\n"])), (function(e) {
                    return e.clicked ? "100%" : "0"
                }), (function(e) {
                    return e.clicked ? "1.5rem" : "0"
                }));
            var Je, Xe = function() {
                    var e = Object(a.useState)(!1),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        r = t[1];
                    return Object(Se.jsxs)("div", {
                        className: "SidebarRoot",
                        children: [Object(Se.jsx)(Qe, {
                            clicked: n,
                            onClick: function() {
                                return r(!n)
                            }
                        }), Object(Se.jsxs)("div", {
                            className: "SidebarContainer",
                            children: [Object(Se.jsx)(Ye, {}), Object(Se.jsxs)(Ke, {
                                clicked: n,
                                children: [Object(Se.jsxs)(c.c, {
                                    className: "Item",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    exact: !0,
                                    activeClassName: "active",
                                    to: "/",
                                    children: [Object(Se.jsx)("img", {
                                        src: Fe,
                                        alt: "Home"
                                    }), Object(Se.jsx)(qe, {
                                        clicked: n,
                                        children: "Prediction"
                                    })]
                                }), Object(Se.jsxs)(c.c, {
                                    className: "Item",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    activeClassName: "active",
                                    to: "/history",
                                    children: [Object(Se.jsx)("img", {
                                        src: Le,
                                        alt: "History"
                                    }), Object(Se.jsx)(qe, {
                                        clicked: n,
                                        children: "History"
                                    })]
                                }), Object(Se.jsxs)(c.c, {
                                    className: "Item",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    activeClassName: "active",
                                    to: "/chart",
                                    children: [Object(Se.jsx)("img", {
                                        src: He,
                                        alt: "Chart"
                                    }), Object(Se.jsx)(qe, {
                                        clicked: n,
                                        children: "Chart"
                                    })]
                                }), Object(Se.jsxs)(c.c, {
                                    className: "Item",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    activeClassName: "active",
                                    to: "/social",
                                    children: [Object(Se.jsx)("img", {
                                        src: ze,
                                        alt: "Social"
                                    }), Object(Se.jsx)(qe, {
                                        clicked: n,
                                        children: "Social"
                                    })]
                                }), Object(Se.jsxs)(c.c, {
                                    className: "Item",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    activeClassName: "active",
                                    to: "/faq",
                                    children: [Object(Se.jsx)("img", {
                                        src: Ue,
                                        alt: "FAQ"
                                    }), Object(Se.jsx)(qe, {
                                        clicked: n,
                                        children: "FAQ"
                                    })]
                                }), Object(Se.jsxs)(c.c, {
                                    className: "Item",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    activeClassName: "active",
                                    to: "/referrals",
                                    children: [Object(Se.jsx)("img", {
                                        src: We,
                                        alt: "Referrals"
                                    }), Object(Se.jsx)(qe, {
                                        clicked: n,
                                        children: "Referrals"
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                Ze = (n(736), Object(b.a)(Ke)(Je || (Je = Object(l.a)(["\n  width: 80%;\n  flex-direction: row;\n  background: transparent;\n  padding: 0.5rem;\n  z-index: 6;\n  top: unset;\n  left: auto;\n  right: auto;\n  justify-content: center;\n"]))));
            var _e = function() {
                    var e = Object(a.useState)(!1),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        r = t[1];
                    return Object(Se.jsx)("div", {
                        className: "SidebarRoot Mobile",
                        children: Object(Se.jsx)("div", {
                            className: "SidebarContainer Mobile",
                            children: Object(Se.jsxs)(Ze, {
                                clicked: n,
                                children: [Object(Se.jsx)(c.c, {
                                    className: "Item Mobile",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    exact: !0,
                                    activeClassName: "active",
                                    to: "/",
                                    children: Object(Se.jsx)("img", {
                                        src: Fe,
                                        alt: "Home"
                                    })
                                }), Object(Se.jsx)(c.c, {
                                    className: "Item Mobile",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    activeClassName: "active",
                                    to: "/history",
                                    children: Object(Se.jsx)("img", {
                                        src: Le,
                                        alt: "History"
                                    })
                                }), Object(Se.jsx)(c.c, {
                                    className: "Item Mobile",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    activeClassName: "active",
                                    to: "/chart",
                                    children: Object(Se.jsx)("img", {
                                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAYAAACrHtS+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAFbVJREFUeJztXXdYVVe2P//OH88YexdRFEFABNsYxBYLiBXFghV7AYKxYu9iF1GxEXuPxsQaezcmmimZzEycSd68+HxvLC/RFycxL2e9/Vv7nMvlDg4Il3Mu9+71fetDvPey992/s9Zee7WtaflTqmAS/KPg8a94jyIvItK3x9HzA+NN0BV5MbF069u7kv7RZAAO9rN3SopKkuj3MxuTvjWG9FMzKCO5LwBfZfekFJUMDRH88NbkUNK3dCL99CzSb281pVyRF9LDWbF+dDm1EenZHRhw+mQ7pQyMBeCpdk9OkXupleCPMnr60bnkYNI3tRUqPZ0Bp98eVlJesmSeiiwVqo9iQirS4m616cyEINI3tCb9xFSh0rc4Az7Wygl5OZkgM+tn51kuVDSxTdVcwLNakX48jfQbG4k+P0DP7hzAZH6wckJeSg6g9d0JpH+QSvq5haRfWW0p4DyJCdG5gL9c15L098fxROjuHqLfva/UetGpheBjmgn0hijSt8WSfjCJ9DPCML66lgVLs3B9acSvKzPgS7vXplPjg+jZyuak7x9C+vlFYh/fxlI+c0xfZby9HjmkOWdYCP20VgjReqE5NwuDeFdfId0ppF9YKsDeQD9d3YD3/WzFpJoJPjK8ZSWHhH84piH999KmpO/sLffxa2uJPt1BdG+fkvLCkQPo74XgPBf8jzUt6JfMX5O+sQ3pOd2EdA9nP4d+eSUDvnvBaLz/oBWTOxLdoBwNbl6RxkZVoflda9HhEQ3oL/OayLM41Pq5BQL0TOczuZLyf6b2gi9pJtArmjPY/7uqBb1Y3UJukVDlWFNI9/vjSf94nlDna0i/nmWua6QVE2Ww+0dWoGFCyqd1rE47BgfQb2c0lhPcP5hdrGxY4GkUE9SUlDtTtOAzmqG2/y404/8szwUbks1grzeke1sM6XsHSHWONb22liVcs3L/HtSsIvVuXJ4SIiqwpZ6V4E+3J4dKFbS7H+lHxdP40RTpeTszx5xcgFUT9FBqJDhHMM2I8aeLKY3o7rQw1oz/taQpfSck3JTsXwA2Tj0MuDDW9iaKE1Aq20esOW9aaLBNebs6DW1RyXEeTBLG28pefnRjUoicJJ5Godbx2meZYt85lkyrR7XH71mWTNBzKSehaVVa1qM2Le/pR5sH1KWjowLpWloI/WFmOH27KJJBh4T/X6ZhrG2MljGKvQMNwBcLdb6e9FubrZVwLXdfpoFNpfPl5rsC8E3t5NFBnBWN93xp/ATYSsIF6LB7ICQpbavSgrhatG1gPTo5Log+mxpG3yyIoKfLm+UabNgit3Ymfc8Aef62CXBnovjw8jQvthZxAAVPo5BoWJN2TcjDiYWka6M3qVuoNHyhMTP7+tNxcdIB6P+xMJL385drW7oAnmKo9HVCpW+yD/AeYeVodkxN+mSKAHxHL9JPTuMn0a4JlQJi0OtU/BV1DnqTEoU9BMMXKv7cxGD6clY4PVompVzPeisv4Dj95LXSLSfqFlKOZnWpwU8nG2xn51ru9iuF5KfJnAE2fuHPgB10bHQgr+O/G6r9Z1jrmzvKdYXmxLFMnHx+kScf3Y6Js3pK7yQAFxYnG2xQO2Kf0RTghaEkwU8mta9Ga+LrsBEH4/cLYcQx6BnNpFqH5sTJR5x49IsZdDWbM4vu2DFhihWAz+hkSDiODxcWW3tsKL3EHstx0dXZcocvA8bblXcasQH8qVhPqPcnAB3Ol0MjxTF3JrtWNbm2sXZMmgGfbgK+D4AvsdWoKCUED9nBfs2q0sZ+/rR/eH0OQF0WYF9ICRbAN2T1blrvP4jzOat1+DYu2Gsf5QP4UgV4wXRwRFRNOpjUgA21O8Lg/V16Y17Dj8Xvu4fWZ2cWrPe9w+rT59Mbk57dnvQjY9lG0hTgpYbaCj7fNaQ8SzTU9t8WRLLahrcNKhwPACR/0tu1aKo4siFWgQfjPxc3JX1XH9I/nKQALyU0QPA3c7vXo6uGd42NMnjUxPELavvr+RHmumULfoJ/w1GDPR57Ox/TDgxTgJcC4rP3lsRANsi+mtuEQ6DsK9/8NucD4gim/XNkkT83pUMN2iPUPB4IBFM0BbhHE4MGFY4j130BNoIk7IaGUwUWeHb7fxVGThH8C16HNxMOGU0B7rHEYCMjCEGSP89pwiFQNsC2dpEsANcKlzPgnMRoW36BAvzVxACdnSDB/uPscE5y4AgYpNqQbq2UJYgowPMnBhuGFo5ckGx2oCDODVWOog2xd2ulDGyQAjwvxQn+rG9EJV6PP8yScW6OfsEvDisbEi6MNa0Ugg1SgOcSS/WmxCB2osAXDhVuJjMgvs0xbvFvrZSCDVKuVUkMNqxoVNLCScIpxpBmlGBtiGIJ/3oRW9hPtVIKNsjXAecAiGDOBzDBZvWNvRr55AA8yyHVAHuErTMuJvky4CzV83sEsK/7T3NkMuKPpmTj6GVIt1aKVbgr+SrgDDaAhv8buWiwwn80K0UQwwYLI03zIrBBvgY4vF7INGEL/K/zIrji5rlhhSO9GC5S5KO9zN9VWuopXyv9H7Lu6aXdk3MzsVTjTA0L/KFQ389MoDMl0JBweNJmxNTB91+keRnYIF8AfJzgF6NbV3dINEDl45ahtgE6ol2QdE1KNcCuZu+0S4a8GfBATYYp6dPp4RypQjYpW+CG8wQ/Id14AFBEoHmhCnelXMCRxLhvkLcAzuo7PbYuR7eQKw6jLA/YQroh5ZBszQOCGlaRtwE+SvD3grnmC3s1jlrwmDlqtcWZGkAjTAnJ1nwEaJO8BfB4zSiLujsjgh4simSgkRtuVnSCXxj7NKo9F/QMMEuofAZskDcAzur7+PgwBhr7NIIdUNUmyPj9sVDpMNjwIGg+XC9XmgF3JBT8bWGko2TXrM+GCn9uAA13KfbxCW1r+pwKd6XcQgQnwJ9d5MqTF3ZP7hXkABogQ2phkEF1A2hzf4baxuvIKr30bhO8/6FWdKDztNwqBtv+oOUL+N/PrsXkvrN7ci7kWHSAaXZdgMqGNJseMgAPtY44tlMWKcAeUsRxEwTfR2CFExe5OLC/LKs+MiYfHkv60Qmkf5hG+pnZpF9awR0f9FvZHuG9zBfwp+fXYWLP7Z6coMqC52kG0Oa+DIABLqQZ52gT6KeG+oZvXHOfVN2f3dWfToxtyNmqnASBWjF0vDo8UgA82oXHSMBRZYIWH9fXywZJd3crwAsgluipnf0YYPaMZTkFNsQRC1INCX9qFAJgnx7cooq71eejcW2q0/q+ss3HY7NWDKVD+4dynnkehuSjMRL65KABwM1NDDbd268Az4dQYIeqShrfpoYjqMEAw1mCGDV+CuBNoOETx3n7dHI45vy15v598lGv8IpcRbJ7SADHzLkMGL1bdvaRwDszasHRogsdHz6ez+qcPt3JzQ41TwXchj3csT+fSJGpwFDf3EWB88jaOLxjeABgjT9YLPfoDyeE4XP3NQl2/xKY26N2gW9SUkvZC+dSaiPWJtybFmnKuFjAmXO6S+Ch2lEtenWNbHQo1LrmSYDftR5wf8FrNANoqO0fDTbDkz87hSx/WJ27RwPoI2NC8Tk4WwB2QgnO81EL/zeoT5PyNCemJn0wOpAjblyMwClQ7fIyKlHe6y7V+4kp0mi7tZnoTo7nAv7wNHcoeFJCYzqkeUmvgNwWV5BksLE3A2BY4uiD9sCwuGE0IT/c+DzAji+hOTrTo+Z1ylD30HLc2uPA8Abc0w4PHyc1mvM22dG5KVFa6heXyX38k+2eC/iDk9zy45Ebx8lzjmWQDb82q0ZTZYsFg6TDJQoDDJKEbgq/EQu8aVAQPntLs/48y4CjNQoa+OwbjvLfMBl5W2s04HNms5EPumkcf8fIAt7Ial3zcsDz9gfnKFW0IwYtre3WBsvIFc7VUNmQZICMIoCZXevi83s1CXaXYs6pKKQAfwUFCd6qOYOMREDO/GwnEwLZyo42VLc8P8MSh0QDaIQyIdGYi9PfAdjh7vzSr0kKcCeCxJlqljITQ4y6KxTZdTRYVldKK7s1788IV2JvxnEK2aLIL0Py/76RIabF7RFuSIMU4IJ6Cf4Cn98yJJi/PDtGACq+LM6oABrSDbDFfm16whDoQKYoVDY6KNx8N5TSOvphPGSnlLTFXRRSgAv6Ij2mDvcyQd30n4TlzA32YYSZalx8cRyxIM2wsvEeSDFARjXm8bGNMAYnK2gS7EArvnARSAEuKLtjcAWaG1uTOxCicxH2X6hpOEVwnELwAuoanikT5IsprLK5OF6TYI+y4ksWkxTgmpEgOOqtytzFMWdQPTqfHMzlOvfEYiDBH/9GLxSU3Gq5BhjATrHge7mTFODmZ9FcFv3WcfcZ2lPhKg0U0O9OCjJDkh4TBy4GKcDNz46JqkLvtKvG7beTomrgM7jDo7jxZ08jBbhBrlkgALsk7/CYqMlbgIqTcYIsnnGvOa4C3AaSxX8zwmVTHZzzXyfr5PIKvifs2aUsE/TXIQW4DUTbE+XNA3z7ktmh2JqsEwW4DcRz3JDgzw1snxYp62QP0edFyjpRgNtANKR5JU6nRkdDtL1kz541WScKcBuIG/nj+szV8XVYyvkmRWuyThTgNhC1q/8GJTSpwBfy4LxvYdaJAtwGouiAMtQzrBzPFe2oLcw6UYDbQAy4mWa039pFV4DbQApwN5ECvGBSgNtACnA3kQK8YFKA20AKcDeRArxgUoDbQApwN5ECvGBSgNtACnA3kQK8YFKA20AKcDfRKzpAZGJihekAYdZ4o+fZGcFXDb4u+JLgU/nwVeO1HE1euu5XmHkqwN1DxQGc88wmd65Dy+Lr05HUVnR6Zhc6PbcHnV3Yh07Mi6cj6T2cuCe9Pyuezi4bSqdXjKbs6YMpIzkB46zSCk5jVoC7ifIF/MUVbsz3U0Gf3TUkgK9PRtckTkbIk2eWT2LhBymkn5ohw5W3smXaUeHyzDwH8GFeAHgROzHS7BhZaoQyIpQY8RdFpsmBoTKvzJkPjZSJhSenk35pOem3t3KOGf3mYKkD/J6vAj6sZSVK71yDAUArDu7sgBSjXX1lGrEzIxnh0Ai+P1u/sFhmoNzbK0A/oAC3kIoFeJxYhJGtKtOa+DpcQ4ZiQpltgjyzuLyMlCMAj2xS5IpfyyS6816pVOk+C3jR88ymkn55pVDrWxh0zbMB/6apnwKcP1ukPLN9Rcoz8wgJn9xBAW4VCLYDHqcA9y3AkRcPwPd6DeBTFeCvoPuRtb0W8Ne6xspXAL8TVvPfeJ3ebV+NS528DvBCXkWpAFeAezfgkxTgCnAFuJcDjt50yB3wacCnGh4oLATKeHEvCeq3nZmb9qEVJ9yriJrBn47LX25v9bSxXMkBeBoAHxLAa2XR2G6nYgMODxSMmZ2DA7iNJvqnojEfmuY6MxaHvW0IocKfjkL9a5nsXi3sWHHWjOVKDHiX4DcppW1Vbj1yY1KIVWO7nYoNOD6f0qYqZfevS+cmBnN7TTSzR09VZ0a3ZG7Ig7acOO/Dn44w6fWs1xorWYy1qWTHciUGvGPDsjQ2qgplJfhzLzqLxnY7FRvwzkFlCR0ZV/T049sCziUHC+kLoduTQ/Mw/j76rUIquD8LQqWn00m/mFGYsV5G1XuDOolFH9WqMi0v2bFciQFHoAjh4CXda3PWi0Vju52KDfjbgWVpULOKlC7+xro+dei9QQG8IAimOPPhEQ24CxNacnK7Dhg2WIyT0woNeAdjLARr1saX2FiudKdxzTL8XRMiKnDEbLV1Y7udigV4+wZS6vpHVmBViwyYpUICVvTyo1W98zIWaWM/f14kxM75ZiBIwP6hhQK8Xf2yrFb7iUVHu8/ZXUpsLFe6E1G7DLUVEt67cXlW6zM712BJt2Bst1OxAMcTHx9enqVuQnRVfvrRbHeuAB6dlp0ZMXO06IQWwLHqllB/ZvutQoz1pFuoHCtRjDW+dZWSHMuVcpoIwHuElePvi+0LhiNAt2Bst1NxAHfXBaykFZy1mqTJW5asGMuVGmkypdqOsd1O+QPuIRejKnI/5Q+4h5wZFbmfHIDj1gLOLL24zGPcgIrybJtuaUnOgMM/jWMEt6wE4B5ybaIiTV62uy2G/rJxoAl6sWwBigmWmRwoJtB3xpN+fpGScM+h8wfHNM712iGn/9xCZyOwsLV5DmJPGXzEcBdyPvmpdGc3ICpIvxH8uSaveQbvcuFFmiwmfO3BFeWhalruWmJdceEA1vtLvh5sVx9ZuYOcfmT8Xl1DGRP7mKAXWurZeQJ3JbxErD5QByaeou/PZNC3xxbQH3dNoRuZo+jy8sF0OWMgbUnpQluSO4ufMbQlNZbmJram1WM70dIRHWnDxJgrab2aU1qvZjS6S1hhjyo+yWndQiktLoTSuoKDKS22Ic3pHUorEyMoe3gE5SSF0cdpkXRjalMZckUxBzpEoyU4AjLoH3ttHfeCRzTO6W//S+Bftq5XhgZEVmBHAa6d4lIhRHng9AdDjeDJQuN51IfBTQg+PCr35gGEAfE+8PE02bb6WLJ4bXxuMeHh0bLI8JAv8gijxm64LMRAwSVUNIxkhFF3J4jttDfpO3rKTtBwx26M5nArCjtkBK6NjMBhDfOAvlaGX29ucj5OvxL4F1H1ZEYm/NOoHsFF7HzZHP44asTA5mTe6yG4p2TzdUwYk8cXcXwx48uhef3+wblfDkkBe3yR+8siS17LPk7r2V1KrjDKHDc5okon6y0G+nFGM77kDzcts7cOkm5W70DIEJTBjQ+Ixl1ZLSUefGWVM/B56OlbdctQO6HWk1rKiNdxATpy1P86L4Ivm8MDgEG/NfiBwQ+XNOWsD0SFEA7k7WB9K5ebg6NybxNGYgBed80Q8QFGkSWkFRkykFbcjY6bHLF2ABX+doCKsmtc8YG7WJHggZg/7n6DQY0MH6w/Z9ng4cCDA4GC9oQ2hXaFRkY5NvjkNK7wcQX8KwCOSFCfJuUptW01WtajNm0dWI+zSg6NkNGf/PjIyEA6NiqQtcLJcfK+MtxQeDm1EU/y+qS8fC3Nd9m8sO+SWBusEUKrWK/T44N47SBkR8VaYl0R9kVWDRIttgyoy4zIHNYafwv1e3hIGHgIEzQCMmxwOwQ0MB4EoVFeJeG42PWrbqHlqG8TGRhACtGCrrUYeMSdwSuMn86M/1tpRItQPQobAMkBiBQhGYInO1AyHiCw+btPslgPrMumfnX57hasVWZff143RNgQecOaL4qrRXNiarIzDFjg53yBB96PBwIPDZIoEXOHFkbmDTQuKnfndvUDwMsLMt7cGQRRXBIWfXt5GSCk/oPRgawloDXhLINLvEODsuZ7AXatV+CsqBQQooSPsdVC8qEpjoxswFvB0TF83ed3WiGOYopKDz2GjwRdNrB17hgcQO0DHdIMsEfaPD9FbiZaICQbe7xWSMeKK/0/3BKHDeMqQg0AAAAASUVORK5CYII=",
                                        alt: "Chart"
                                    })
                                }), Object(Se.jsx)(c.c, {
                                    className: "Item Mobile",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    activeClassName: "active",
                                    to: "/social",
                                    children: Object(Se.jsx)("img", {
                                        src: ze,
                                        alt: "Social"
                                    })
                                }), Object(Se.jsx)(c.c, {
                                    className: "Item Mobile",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    activeClassName: "active",
                                    to: "/faq",
                                    children: Object(Se.jsx)("img", {
                                        src: Ue,
                                        alt: "FAQ"
                                    })
                                }), Object(Se.jsx)(c.c, {
                                    className: "Item",
                                    onClick: function() {
                                        return r(!1)
                                    },
                                    activeClassName: "active",
                                    to: "/referrals",
                                    children: Object(Se.jsx)("img", {
                                        src: We,
                                        alt: "Referrals"
                                    })
                                })]
                            })
                        })
                    })
                },
                $e = function() {
                    var e = Object(a.useContext)(ve);
                    return Object(Se.jsx)(r.a.Fragment, {
                        children: e ? Object(Se.jsx)(_e, {}) : Object(Se.jsx)(Xe, {})
                    })
                },
                et = n.p + "static/media/DogeBetsLogo1.4d1d25e1.png",
                tt = n(409),
                nt = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = Object(a.useRef)(t);
                    Object(a.useLayoutEffect)((function() {
                        r.current = t
                    }));
                    var s = Object(a.useCallback)((function(t) {
                        e.some((function(e) {
                            return t.key === e
                        })) && r.current(t)
                    }), [e]);
                    Object(a.useEffect)((function() {
                        var e = null !== n && void 0 !== n ? n : document;
                        return e && e.addEventListener("keydown", s),
                            function() {
                                return e && e.removeEventListener("keydown", s)
                            }
                    }), [s, n])
                };
            var at = function(e) {
                var t = r.a.useState("true" === sessionStorage.getItem(k + e)),
                    n = Object(u.a)(t, 2),
                    a = n[0],
                    s = n[1];
                return r.a.useEffect((function() {
                    sessionStorage.setItem(k + e, a)
                }), [a]), [a, s]
            };
            var rt = function(e) {
                var t = r.a.useState("true" === localStorage.getItem(k + e)),
                    n = Object(u.a)(t, 2),
                    a = n[0],
                    s = n[1];
                return r.a.useEffect((function() {
                    localStorage.setItem(k + e, a)
                }), [a]), [a, s]
            };
            n(854), n(382);
            var st = function(e) {
                    var t = Object(a.useContext)(ve),
                        n = Object(a.useContext)(je),
                        s = n.web3Data,
                        i = n.SetWeb3Data,
                        c = rt("simulateDisconnect"),
                        l = Object(u.a)(c, 2),
                        d = l[0],
                        p = l[1],
                        b = Object(a.useState)(!1),
                        m = Object(u.a)(b, 2),
                        h = m[0],
                        f = m[1],
                        j = Object(a.useState)(!1),
                        y = Object(u.a)(j, 2),
                        v = y[0],
                        w = y[1],
                        k = Object(a.useState)("CONNECT"),
                        B = Object(u.a)(k, 2),
                        N = B[0],
                        S = B[1],
                        P = Object(a.useState)(!1),
                        I = Object(u.a)(P, 2),
                        M = I[0],
                        R = I[1];

                    function A() {
                        H() && alert("You are in dev mode"), p(!1), E()
                    }

                    function E() {
                        R(!M)
                    }

                    function F() {
                        return (F = Object(x.a)(O.a.mark((function e() {
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!h && !d) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (window.ethereum) {
                                            e.next = 6;
                                            break
                                        }
                                        setTimeout(L, 250), e.next = 10;
                                        break;
                                    case 6:
                                        return e.next = 8, V();
                                    case 8:
                                        if (!e.sent) {
                                            e.next = 10;
                                            break
                                        }
                                        K();
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function L() {
                        return W.apply(this, arguments)
                    }

                    function W() {
                        return (W = Object(x.a)(O.a.mark((function e() {
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, z(!1);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function z() {
                        return G.apply(this, arguments)
                    }

                    function G() {
                        return G = Object(x.a)(O.a.mark((function e() {
                            var t, n, a, r, s = arguments;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = !(s.length > 0 && void 0 !== s[0]) || s[0], n = T ? {
                                            chainId: 56,
                                            rpc: {
                                                56: C.mainnet
                                            }
                                        } : {
                                            chainId: 97,
                                            rpc: {
                                                97: C.testnet
                                            }
                                        }, a = new tt.a(Object(o.a)(Object(o.a)({}, n), {}, {
                                            qrcode: t
                                        })), e.prev = 3, e.next = 6, a.enable();
                                    case 6:
                                        r = e.sent, e.next = 14;
                                        break;
                                    case 9:
                                        return e.prev = 9, e.t0 = e.catch(3), U(e.t0), f(!0), e.abrupt("return");
                                    case 14:
                                        r ? (oe(new Y.a(a)), f(!1)) : (null, alert("User seems to have rejected connection"), f(!0));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 9]
                            ])
                        }))), G.apply(this, arguments)
                    }

                    function V() {
                        return Q.apply(this, arguments)
                    }

                    function Q() {
                        return (Q = Object(x.a)(O.a.mark((function e() {
                            var t, n;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (window.ethereum && Y.a.givenProvider) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", !1);
                                    case 2:
                                        if (t = new Y.a(Y.a.givenProvider)) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", !1);
                                    case 5:
                                        return e.next = 7, t.eth.getAccounts();
                                    case 7:
                                        if (n = e.sent, !!n[0]) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return", !1);
                                    case 13:
                                        return e.abrupt("return", !0);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function K() {
                        return q.apply(this, arguments)
                    }

                    function q() {
                        return (q = Object(x.a)(O.a.mark((function e() {
                            var t;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = Y.a.givenProvider ? new Y.a(Y.a.givenProvider) : null) {
                                            e.next = 4;
                                            break
                                        }
                                        return ae(), e.abrupt("return");
                                    case 4:
                                        return e.next = 6, J();
                                    case 6:
                                        if (e.t0 = e.sent, !0 !== e.t0) {
                                            e.next = 17;
                                            break
                                        }
                                        return oe(t), e.next = 11, _(t);
                                    case 11:
                                        if (e.sent) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.next = 14, X();
                                    case 14:
                                        return e.abrupt("return");
                                    case 17:
                                        return f(!0), e.abrupt("return");
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function X() {
                        return $.apply(this, arguments)
                    }

                    function $() {
                        return ($ = Object(x.a)(O.a.mark((function e() {
                            var t, n, a;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = "0x" + D.toString(16), n = 4001, a = 4902, e.prev = 3, e.next = 6, window.ethereum.request({
                                            method: "wallet_switchEthereumChain",
                                            params: [{
                                                chainId: t
                                            }]
                                        });
                                    case 6:
                                        w(!1), window.location.reload(!1), e.next = 25;
                                        break;
                                    case 10:
                                        if (e.prev = 10, e.t0 = e.catch(3), console.log("caught error while changing chain; details"), console.log(e.t0), e.t0.code !== n) {
                                            e.next = 22;
                                            break
                                        }
                                        return w(!0), e.next = 18, g.web3.eth.net.getId();
                                    case 18:
                                        return g.currentChainID = e.sent, e.abrupt("return");
                                    case 22:
                                        if (e.t0.code !== a) {
                                            e.next = 25;
                                            break
                                        }
                                        return te(D), e.abrupt("return");
                                    case 25:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 10]
                            ])
                        })))).apply(this, arguments)
                    }

                    function te() {
                        return ne.apply(this, arguments)
                    }

                    function ne() {
                        return ne = Object(x.a)(O.a.mark((function e() {
                            var t, n, a, r = arguments;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = r.length > 0 && void 0 !== r[0] ? r[0] : 0, n = -32002, a = 4001, e.prev = 3, e.next = 6, ee(t);
                                    case 6:
                                        window.location.reload(!1), e.next = 31;
                                        break;
                                    case 9:
                                        if (e.prev = 9, e.t0 = e.catch(3), console.log(e.t0), e.t0.code !== n) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.next = 15, g.web3.eth.net.getId();
                                    case 15:
                                        g.currentChainID = e.sent, e.next = 31;
                                        break;
                                    case 18:
                                        if (e.t0.code !== a) {
                                            e.next = 26;
                                            break
                                        }
                                        return e.next = 21, g.web3.eth.net.getId();
                                    case 21:
                                        g.currentChainID = e.sent, ie(), w(!0), e.next = 31;
                                        break;
                                    case 26:
                                        return e.next = 28, g.web3.eth.net.getId();
                                    case 28:
                                        g.currentChainID = e.sent, alert("Failed to add new network"), console.error("Unknown error when adding new network");
                                    case 31:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 9]
                            ])
                        }))), ne.apply(this, arguments)
                    }

                    function re(e) {
                        g.currentChainID = e, me().then((function(e) {
                            ce(e), fe(e)
                        }));
                        parseInt(e, 16);
                        e !== "0x" + D.toString(16) && (console.log("wrong chain in use"), v || X())
                    }

                    function se(e) {
                        0 === e.length ? (ce(null), console.log("User wallet disconnected"), alert("Wallet disconnected")) : e[0] !== s.address && ce(e[0])
                    }

                    function ce(e) {
                        fe(e), e !== s.address && i(Object(o.a)(Object(o.a)({}, s), {}, {
                            address: e
                        }))
                    }

                    function oe(e) {
                        g.web3 = e, i(Object(o.a)(Object(o.a)({}, s), {}, {
                            web3: e
                        }))
                    }

                    function ue() {
                        return le.apply(this, arguments)
                    }

                    function le() {
                        return (le = Object(x.a)(O.a.mark((function e() {
                            var t;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, pe();
                                    case 2:
                                        t = e.sent, JSON.stringify(t) !== JSON.stringify(g.userBalance) && (g.userBalance = t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function de() {
                        return (de = Object(x.a)(O.a.mark((function e() {
                            var t;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!s.web3) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.next = 3, s.web3.eth.net.getId();
                                    case 3:
                                        return g.currentChainID = e.sent, e.next = 6, me();
                                    case 6:
                                        fe(t = e.sent), ce(t), e.next = 14;
                                        break;
                                    case 11:
                                        g.currentChainID = null, fe(null), ce(null);
                                    case 14:
                                        ue();
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function pe() {
                        return be.apply(this, arguments)
                    }

                    function be() {
                        return (be = Object(x.a)(O.a.mark((function e() {
                            var t, n;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!s.address) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 3, s.web3.eth.getBalance(s.address);
                                    case 3:
                                        return t = e.sent, n = s.web3.utils.fromWei(t, "Ether"), e.abrupt("return", {
                                            wei: t,
                                            ether: n
                                        });
                                    case 8:
                                        return e.abrupt("return", {
                                            wei: 0,
                                            ether: 0
                                        });
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function me() {
                        return he.apply(this, arguments)
                    }

                    function he() {
                        return (he = Object(x.a)(O.a.mark((function e() {
                            var t, n;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (s.web3) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", null);
                                    case 2:
                                        return e.next = 4, s.web3.eth.getAccounts();
                                    case 4:
                                        return t = e.sent, n = t[0], e.abrupt("return", n);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function fe(e) {
                        var t;
                        (t = e ? Z() ? e ? e.slice(0, 6) + "..." + e.slice(-4) : "CONNECT" : "WRONG NET" : "CONNECT") != N && S(t)
                    }

                    function ye() {
                        return Object(Se.jsxs)("button", {
                            className: "ConnectButton " + (t ? "Mobile" : "Desktop"),
                            onClick: A,
                            children: [Object(Se.jsx)("img", {
                                className: "ConnectImg",
                                src: Be,
                                alt: "metamask"
                            }), N]
                        })
                    }
                    return Object(a.useEffect)((function() {
                        ! function() {
                            if (!window.ethereum) return;
                            window.ethereum.on("chainChanged", re), window.ethereum.on("accountsChanged", se), window.ethereum.on("disconnect", se)
                        }();
                        var e = setInterval(Object(x.a)(O.a.mark((function e() {
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        ue();
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 2500);
                        return function() {
                            clearInterval(e),
                                function() {
                                    if (!window.ethereum) return;
                                    window.ethereum.removeListener("chainChanged", re), window.ethereum.removeListener("accountsChanged", se), window.ethereum.removeListener("disconnect", se)
                                }()
                        }
                    }), [s]), Object(a.useEffect)((function() {
                        ! function() {
                            de.apply(this, arguments)
                        }()
                    }), [s.web3]), Object(a.useEffect)((function() {
                        fe(s.address)
                    }), [s.address, g.currentChainID]), Object(a.useEffect)((function() {
                        ! function() {
                            F.apply(this, arguments)
                        }()
                    }), [h]), Object(Se.jsxs)(r.a.Fragment, {
                        children: [Object(Se.jsx)(ye, {}), M ? s.address ? Object(Se.jsx)(Pe, {
                            closePopup: E,
                            disconnect: Object(x.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            p(!0), localStorage.removeItem("walletconnect"), window.location.reload(!1), E();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))
                        }) : Object(Se.jsx)(Ce, {
                            closePopup: E,
                            connectMM: Object(x.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, K();
                                        case 2:
                                            E();
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            connectWC: Object(x.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, z();
                                        case 2:
                                            E();
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))
                        }) : null]
                    })
                },
                it = function() {
                    var e = Object(a.useContext)(ve),
                        t = Object(Se.jsx)(c.c, {
                            to: "/",
                            children: Object(Se.jsx)("img", {
                                className: "DogeLogo" + (e ? " mobile" : ""),
                                src: et,
                                alt: "khal doggo"
                            })
                        }),
                        n = Object(Se.jsx)(c.c, {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            to: "/",
                            children: Object(Se.jsx)("img", {
                                className: "DogeLogo" + (e ? " mobile" : ""),
                                src: et,
                                alt: "khal doggo"
                            })
                        });
                    return Object(Se.jsxs)("div", {
                        className: "NBMainContainer" + (e ? " mobile" : ""),
                        children: [Object(Se.jsx)("div", {
                            className: "DogeLogoContainer",
                            children: B ? n : t
                        }), Object(Se.jsx)(st, {})]
                    })
                },
                ct = n(887),
                ot = function(e) {
                    return function() {
                        return Object(Se.jsx)(ct.a.div, {
                            initial: {
                                y: 500
                            },
                            animate: {
                                y: 0,
                                transition: {
                                    duration: .5,
                                    type: "spring"
                                }
                            },
                            exit: {
                                y: -500,
                                transition: {
                                    duration: .5,
                                    type: "spring",
                                    ease: "easeInOut"
                                }
                            },
                            children: Object(Se.jsx)(e, {})
                        })
                    }
                };
            n(855);
            var ut = function() {
                return null
            };

            function lt(e) {
                var t = Object(a.useContext)(ye);
                return void 0 === e.price ? "no price given to format" : null === e.price ? null : Number(e.price).toFixed(t.decimalPlaces).replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }
            var dt = n.p + "static/media/paws_up.e4470cbb.png",
                pt = n.p + "static/media/paws_down.d922d526.png",
                bt = n.p + "static/media/paws_neutral.90c20287.png";
            n(171);
            var mt = function(e) {
                    var t = Object.freeze({
                            up: 0,
                            down: 1,
                            tie: 2
                        }),
                        n = Object(a.useState)("#FFFFFF"),
                        s = Object(u.a)(n, 2),
                        i = s[0],
                        c = s[1],
                        o = Object(a.useState)(null),
                        l = Object(u.a)(o, 2),
                        d = l[0],
                        p = l[1],
                        b = Object(a.useState)(0),
                        m = Object(u.a)(b, 2),
                        h = m[0],
                        f = m[1],
                        j = Object(a.useState)(0),
                        y = Object(u.a)(j, 2),
                        v = y[0],
                        w = y[1],
                        g = Object(a.useContext)(ye),
                        k = Object(a.useContext)(ve);

                    function B() {
                        return T.apply(this, arguments)
                    }

                    function T() {
                        return (T = Object(x.a)(O.a.mark((function e() {
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        g.helper.FetchCurrentPrice();
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function N() {
                        return (N = Object(x.a)(O.a.mark((function e() {
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        h !== g.helper.currentPrice && f(g.helper.currentPrice);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function S() {
                        var e = Number(h) - Number(v);
                        return e > 0 ? t.up : e < 0 ? t.down : t.tie
                    }

                    function C() {
                        var e, t, n = Number(h) - Number(v);
                        return e = 0 === Number(v) ? "N/A" : ((Number(h) - Number(v)) / Number(v) * 100).toFixed(2), t = n > 0 ? "+" + n.toFixed(g.decimalPlaces) : n < 0 ? n.toFixed(g.decimalPlaces) : "0.00", Object(Se.jsx)("div", {
                            id: "Difference",
                            children: Object(Se.jsxs)("p", {
                                style: {
                                    color: i
                                },
                                children: ["$", t, " (", e, "%)"]
                            })
                        })
                    }

                    function P() {
                        var e, t = S();
                        return e = void 0 === t || null === t ? null : h, Object(Se.jsx)("div", {
                            id: "CurrentPrice",
                            children: Object(Se.jsx)("p", {
                                style: {
                                    color: i
                                },
                                children: Object(Se.jsx)(lt, {
                                    price: e
                                })
                            })
                        })
                    }

                    function D() {
                        return h && v ? Object(Se.jsxs)(r.a.Fragment, {
                            children: [Object(Se.jsx)("div", {
                                className: "ImageContainer",
                                children: Object(Se.jsx)("img", {
                                    src: d,
                                    alt: "thumbs"
                                })
                            }), Object(Se.jsxs)("div", {
                                className: "PriceContainer",
                                children: [Object(Se.jsx)(P, {}), Object(Se.jsx)(C, {})]
                            })]
                        }) : Object(Se.jsxs)(r.a.Fragment, {
                            children: [Object(Se.jsx)("div", {
                                className: "ImageContainer",
                                children: Object(Se.jsx)("img", {
                                    src: d,
                                    alt: "thumbs"
                                })
                            }), Object(Se.jsx)("div", {
                                className: "PriceContainer",
                                children: Object(Se.jsx)("h3", {
                                    children: "Loading..."
                                })
                            })]
                        })
                    }
                    return Object(a.useEffect)((function() {
                        w((e.lockPrice / Math.pow(10, 8)).toFixed(g.decimalPlaces))
                    }), [e.lockPrice]), Object(a.useEffect)((function() {
                        var e = setTimeout(B, 450);
                        return function() {
                            clearTimeout(e)
                        }
                    }), [g]), Object(a.useEffect)((function() {
                        ! function() {
                            var e, n;
                            switch (S()) {
                                case t.up:
                                    e = A, n = dt;
                                    break;
                                case t.down:
                                    e = E, n = pt;
                                    break;
                                default:
                                    e = F, n = bt
                            }
                            e === i && n === d || (c(e), p(n))
                        }();
                        var e = setInterval(B, 1e3);
                        return function() {
                            clearInterval(e)
                        }
                    }), [h, v, g]), Object(a.useEffect)((function() {
                        ! function() {
                            N.apply(this, arguments)
                        }()
                    }), [g.helper.currentPrice]), Object(Se.jsx)("div", {
                        className: "OvalContainer",
                        children: Object(Se.jsx)("div", {
                            className: "PriceAction" + (k ? " Mobile" : ""),
                            style: {
                                border: "3px solid" + i
                            },
                            children: Object(Se.jsx)(D, {})
                        })
                    })
                },
                ht = n.p + "static/media/Clock.168c8627.svg";

            function ft(e) {
                var t = Object(a.useState)(1e3 * e.targetTimestamp),
                    n = Object(u.a)(t, 2),
                    s = n[0],
                    i = n[1],
                    c = Object(a.useState)(0),
                    o = Object(u.a)(c, 2),
                    l = o[0],
                    d = o[1];

                function p() {
                    var e = Date.now();
                    d(s - e)
                }
                return Object(a.useEffect)((function() {
                    var e = setTimeout(p, 450),
                        t = setInterval(p, 1e3);
                    return function() {
                        clearTimeout(e), clearInterval(t)
                    }
                }), [s]), Object(a.useEffect)((function() {
                    ! function() {
                        var t = 1e3 * e.targetTimestamp,
                            n = Date.now(),
                            a = t - n;
                        i(1e3 * e.targetTimestamp), d(a)
                    }(), p()
                }), [e.targetTimestamp]), Object(Se.jsxs)("div", {
                    className: "TimerContainer",
                    children: [e.showImage ? Object(Se.jsx)("img", {
                        alt: "timer",
                        className: "DogeClock",
                        src: ht
                    }) : null, function() {
                        if (l < 0) return e.endedMessage;
                        var t = Math.round(l / 1e3),
                            n = Math.floor(t / 60),
                            a = t - Math.abs(60 * n);
                        return a < 10 && (a = "0" + a), Object(Se.jsxs)(r.a.Fragment, {
                            children: [e.ongoingMessage, " in ", n, Object(Se.jsx)("span", {
                                className: "timeSeparators",
                                children: " m:"
                            }), a, Object(Se.jsx)("span", {
                                className: "timeSeparators",
                                children: " s"
                            })]
                        })
                    }()]
                })
            }
            var jt, yt, xt = r.a.memo(ft),
                vt = n.p + "static/media/BNBblack.c70cb4d8.svg",
                Ot = ["title", "titleId"];

            function wt() {
                return wt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, wt.apply(this, arguments)
            }

            function gt(e, t) {
                if (null == e) return {};
                var n, a, r = function(e, t) {
                    if (null == e) return {};
                    var n, a, r = {},
                        s = Object.keys(e);
                    for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function kt(e, t) {
                var n = e.title,
                    r = e.titleId,
                    s = gt(e, Ot);
                return a.createElement("svg", wt({
                    viewBox: "0 0 226.02 203.96",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, jt || (jt = a.createElement("defs", null, a.createElement("clipPath", {
                    id: "a"
                }, a.createElement("rect", {
                    width: 243,
                    height: 204
                })))), yt || (yt = a.createElement("g", {
                    transform: "matrix(.94567 0 0 1.0439 -3.7827 -8.6728)",
                    clipPath: "url(#a)"
                }, a.createElement("g", {
                    transform: "translate(4 .298)",
                    "data-name": "Capa 2"
                }, a.createElement("path", {
                    d: "m222.85 94.69c-5.47-2-11.18-3.33-16.78-5 22.07-17.12 28.69-29.34 25.59-49.68-2.53-16.6-25.982-21.68-39.032-32-0.16864 1.3601-0.1112 2.7387 0.17 4.08 1 7.87 13.083 13.73 13.313 21.62 0.57 19.33-3.5209 25.13-19.911 29.08-4.62 1.11-9.48 1.25-14.73 1.89-1.86-6.11-5.48-8.61-11.32-8.54-3.77 0-7.55-0.93-11.33-1.34-10.69-1.13-21.41-3.39-32-3-13.85 0.48-27.66 2.86-41.41 4.93-2.26 0.34-4.14 3.28-6.17 5-0.91 0.8-1.64 2.21-2.65 2.42-14.82 3.13-28.461-7.56-31.431-22.65-1.72-8.75 14.166-18.845 14.231-25.413 1.1196-5.5616 0.2596-2.7916 1.1196-7.5616-14.11 11-41 16.374-42.77 34.034-2.13 21.36 8.18 36.44 25.26 46.64l-33 12.14c3.42 3.11 6.39 5.74 9.27 8.47 6 5.65 13 8.79 21.22 7.61 5.0227-0.88597 9.983-2.0952 14.85-3.62 3.27-0.91 6.55-2 9 1.39 6.08 8.4533 12.08 16.957 18 25.51 1.47 2.14 3.29 4.66 3.34 7 0.14 8 0.65 16.3-1 24-2.27 10.54 3.87 26.8 18.13 26.35 1.1308-0.11023 2.261 0.21525 3.16 0.91 4.13 4.83 9.55 4.61 15.11 4.29 4.4168-0.36298 8.8505-0.47649 13.28-0.34 7.11 0.39 14.35 2 19.86-4.51 0.32-0.39 1.26-0.42 1.89-0.36 14.08 1.37 21.56-15.88 18.28-28.2-2.93-11-3.48-22.76 5.2-32.87 5.79-6.73 10.26-14.58 15.64-21.69 1-1.39 3.59-2.25 5.46-2.28 2 0 4.08 1.16 6.1 1.87 13.26 4.68 25.38 3.93 35.51-7.13 2.1575-2.1242 4.431-4.1273 6.81-6-5.36-2.29-10.69-5-16.26-7.05z",
                    "data-name": "Trazado 1045"
                })))))
            }
            var Bt, Tt, Nt = a.forwardRef(kt),
                St = (n.p, ["title", "titleId"]);

            function Ct() {
                return Ct = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, Ct.apply(this, arguments)
            }

            function Pt(e, t) {
                if (null == e) return {};
                var n, a, r = function(e, t) {
                    if (null == e) return {};
                    var n, a, r = {},
                        s = Object.keys(e);
                    for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function Dt(e, t) {
                var n = e.title,
                    r = e.titleId,
                    s = Pt(e, St);
                return a.createElement("svg", Ct({
                    width: "42.799mm",
                    height: "40.17mm",
                    viewBox: "0 0 161.76 151.82",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Bt || (Bt = a.createElement("defs", null, a.createElement("clipPath", {
                    id: "a"
                }, a.createElement("rect", {
                    width: 162,
                    height: 152
                })))), Tt || (Tt = a.createElement("g", {
                    transform: "translate(-.00068237)",
                    clipPath: "url(#a)"
                }, a.createElement("g", {
                    transform: "translate(-.021)",
                    "data-name": "Capa 2"
                }, a.createElement("path", {
                    d: "m161.44 27.41c-0.5-1.95-1-3.92-1.6-5.82-1.69-5.06-3.47-10.09-6.52-14.52-4.68-6.78-11.61-8.77-19.2-5.59-4.1093 1.7835-7.7306 4.527-10.56 8-1.7594 2.2792-4.6825 3.329-7.49 2.69-1.1999-0.28212-2.3384-0.78024-3.36-1.47-7.65-4.93-15.9-7.38-25-6.3-4.2167 0.56257-8.4881 0.58273-12.71 0.06-2.6217-0.30843-5.2665-0.37204-7.9-0.19-6.56 0.37-12.43 2.85-17.92 6.35-4.32 2.75-7.93 2.21-11.3-1.57-0.85378-0.97082-1.7654-1.8892-2.73-2.75-4.1-3.61-8.68-6.15-14.45-6.3-0.65 0.06-1.42 0.08-2.19 0.22-5.28 0.92-8.73 4.29-11.23 8.78-3.0713 5.5599-5.3533 11.52-6.78 17.71-0.41832 1.4369-0.56417 2.9394-0.43 4.43 0.84 5.52 4.3 9.4 8.58 12.6 3.62 2.69 4.62 6.2 2.78 10.33-1.1327 2.4346-2.1341 4.9282-3 7.47-4.26 13.03-3.87 25.46 4.4 37.09 9.77 13.78 20.89 26.18 35.37 35 10.45 6.39 21.31 12.1 32 18.07 0.49195 0.18836 1.0407 0.15929 1.51-0.08 7-3.82 14-7.77 21.12-11.5 20.07-10.58 35.93-25.65 48.13-44.7 3.3497-5.4036 5.107-11.643 5.07-18 0.16-8.35-2.24-16.11-5.75-23.6-1.8642-3.53-0.67533-7.9006 2.72-10 3.01-2.1339 5.4875-4.9331 7.24-8.18 1.4902-2.4704 1.9227-5.4369 1.2-8.23z",
                    fill: "current",
                    "data-name": "Trazado 1041"
                })))))
            }
            var It = a.forwardRef(Dt),
                Mt = (n.p, n(229), function(e) {
                    Object(j.a)(n, e);
                    var t = Object(y.a)(n);

                    function n(e) {
                        var a;
                        return Object(h.a)(this, n), (a = t.call(this, e)).RoundExpired = a.RoundExpired_current, a.state = {
                            round: null,
                            roundNext: null,
                            entered: !1,
                            userBetData: null,
                            lockPrice: null
                        }, a
                    }
                    return Object(f.a)(n, [{
                        key: "isMobile",
                        get: function() {
                            return this.context
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.timeout = setTimeout((function() {
                                e.UpdateRoundData(), e.UpdateUserBetData()
                            }), 450), this.timer = setInterval(this.UpdateRoundData.bind(this), 3e3), this.timerBetData = setInterval(this.UpdateUserBetData.bind(this), 3e3)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.UpdateLockPrice()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.timeout), clearInterval(this.timer), clearInterval(this.timerBetData)
                        }
                    }, {
                        key: "UpdateRoundData",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                var t, n;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.props.contract.rpc.methods.Rounds(this.props.roundID).call();
                                        case 2:
                                            return t = e.sent, e.next = 5, this.props.contract.rpc.methods.Rounds(this.props.roundID + 1).call();
                                        case 5:
                                            n = e.sent, this.setState({
                                                round: t,
                                                roundNext: n
                                            });
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "UpdateUserBetData",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                var t, n;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.props.address) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (!this.state.entered) {
                                                e.next = 8;
                                                break
                                            }
                                            clearInterval(this.timerBetData), e.next = 13;
                                            break;
                                        case 8:
                                            return e.next = 10, this.props.contract.rpc.methods.Bets(this.props.roundID, this.props.address).call();
                                        case 10:
                                            t = e.sent, n = t.amount > 0, this.setState({
                                                userBetData: t,
                                                entered: n
                                            });
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "UpdateLockPrice",
                        value: function() {
                            this.RoundNotLoadedYet() || this.state.lockPrice !== Number(this.state.round.lockPrice) && this.setState({
                                lockPrice: Number(this.state.round.lockPrice)
                            })
                        }
                    }, {
                        key: "RoundNotLoadedYet",
                        value: function() {
                            return !this.state.round
                        }
                    }, {
                        key: "NextRoundNotLoadedYet",
                        value: function() {
                            return !this.state.roundNext
                        }
                    }, {
                        key: "RoundExpired_next",
                        value: function() {
                            return !this.NextRoundNotLoadedYet() && 1e3 * this.state.roundNext.lockTimestamp < Date.now()
                        }
                    }, {
                        key: "RoundExpired_current",
                        value: function() {
                            return !this.RoundNotLoadedYet() && 1e3 * this.state.round.closeTimestamp < Date.now()
                        }
                    }, {
                        key: "Prize",
                        value: function() {
                            var e;
                            if (this.RoundNotLoadedYet()) e = null;
                            else {
                                var t = this.state.round,
                                    n = ((Number(t.bullAmount) + Number(t.bearAmount)) / Math.pow(10, 18)).toFixed(4);
                                e = Object(Se.jsxs)("div", {
                                    className: "Prizes",
                                    children: ["Prize Pool:", Object(Se.jsxs)("div", {
                                        children: [Object(Se.jsx)("span", {
                                            className: "Figure",
                                            children: n
                                        }), Object(Se.jsx)("img", {
                                            className: "BNB",
                                            src: vt,
                                            alt: "bnbcoin"
                                        })]
                                    })]
                                })
                            }
                            return e
                        }
                    }, {
                        key: "Payout",
                        value: function(e) {
                            var t;
                            if (this.RoundNotLoadedYet()) t = null;
                            else {
                                var n, a, r = this.state.round,
                                    s = Number(r.bullAmount) + Number(r.bearAmount);
                                if ("bear" === e) n = Number(r.bearAmount);
                                else {
                                    if ("bull" !== e) throw new SyntaxError('missing "side" argument in "Payout" function in "CardCurrent" class');
                                    n = Number(r.bullAmount)
                                }
                                a = 0 === n ? "0.00" : (s / n).toFixed(2), t = Object(Se.jsxs)("p", {
                                    children: [a, "x "]
                                })
                            }
                            return t
                        }
                    }, {
                        key: "UserMadeBetOnThisSide",
                        value: function(e) {
                            if (!e) throw new SyntaxError("missing required argument: side");
                            if (this.state.entered) {
                                var t = Number(this.state.userBetData.position);
                                return t === M.bull && "bull" === e || t === M.bear && "bear" === e
                            }
                        }
                    }, {
                        key: "Rewards",
                        value: function() {
                            return Object(Se.jsxs)("div", {
                                className: "OddsContainer",
                                children: [Object(Se.jsx)("p", {
                                    children: "PAYOUTS"
                                }), Object(Se.jsxs)("div", {
                                    children: [Object(Se.jsxs)("div", {
                                        className: "Odds Bull" + (this.UserMadeBetOnThisSide("bull") ? " Entered" : ""),
                                        children: [this.Payout("bull"), Object(Se.jsx)(Nt, {
                                            className: "Icon"
                                        })]
                                    }), Object(Se.jsxs)("div", {
                                        className: "Odds Bear" + (this.UserMadeBetOnThisSide("bear") ? " Entered" : ""),
                                        children: [Object(Se.jsx)(It, {
                                            className: "Icon"
                                        }), this.Payout("bear")]
                                    })]
                                }), this.EntryNotice()]
                            })
                        }
                    }, {
                        key: "EntryNotice",
                        value: function() {
                            var e = null;
                            return this.UserMadeBetOnThisSide("bull") ? e = Object(Se.jsx)("p", {
                                id: "Entered",
                                className: "Left",
                                children: "Entered"
                            }) : this.UserMadeBetOnThisSide("bear") && (e = Object(Se.jsx)("p", {
                                id: "Entered",
                                className: "Right",
                                children: "Entered"
                            })), e
                        }
                    }, {
                        key: "LockPrice",
                        value: function() {
                            var e;
                            if (this.RoundNotLoadedYet()) e = null;
                            else {
                                var t = Number(this.state.round.lockPrice) / Math.pow(10, 8);
                                e = Object(Se.jsxs)("p", {
                                    id: "LockedPrice",
                                    children: ["Locked Price: ", Object(Se.jsxs)("span", {
                                        className: "Figure",
                                        children: [" ", Object(Se.jsx)(lt, {
                                            price: t
                                        }), " USDT"]
                                    })]
                                })
                            }
                            return e
                        }
                    }, {
                        key: "Timer",
                        value: function() {
                            return this.NextRoundNotLoadedYet() ? null : this.isMobile ? Object(Se.jsx)("div", {
                                children: Object(Se.jsx)(xt, {
                                    targetTimestamp: this.state.round.closeTimestamp,
                                    roundDuration: this.state.round.closeTimestamp - this.state.round.lockTimestamp,
                                    ongoingMessage: "Ends",
                                    endedMessage: "Ended",
                                    showImage: !1
                                })
                            }) : null
                        }
                    }, {
                        key: "ExecutionNotice",
                        value: function() {
                            return this.RoundExpired() ? Object(Se.jsxs)("div", {
                                id: "ExecutionNotice",
                                children: [Object(Se.jsx)("p", {
                                    style: {
                                        fontSize: "2.8em"
                                    },
                                    className: "glowing",
                                    children: "Executing..."
                                }), Object(Se.jsxs)("div", {
                                    className: "box",
                                    children: [Object(Se.jsx)("div", {
                                        className: "square"
                                    }), Object(Se.jsx)("div", {
                                        className: "square"
                                    }), Object(Se.jsx)("div", {
                                        className: "square"
                                    }), Object(Se.jsx)("div", {
                                        className: "square"
                                    }), Object(Se.jsx)("div", {
                                        className: "square"
                                    }), Object(Se.jsx)("div", {
                                        className: "square"
                                    }), Object(Se.jsx)("div", {
                                        className: "square"
                                    }), Object(Se.jsx)("div", {
                                        className: "square"
                                    }), Object(Se.jsx)("div", {
                                        className: "square"
                                    })]
                                })]
                            }) : null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(Se.jsxs)("div", {
                                className: "CardCurrent" + (this.isMobile ? "Mobile" : ""),
                                children: [Object(Se.jsxs)("div", {
                                    className: "CardHeader",
                                    children: [this.Timer(), Object(Se.jsxs)("div", {
                                        className: "RoundNumber",
                                        children: ["Current Round #", this.state.round ? this.state.round.epoch : "-"]
                                    })]
                                }), this.ExecutionNotice(), Object(Se.jsxs)("div", {
                                    className: "Content",
                                    style: {
                                        display: this.RoundExpired() ? "none" : "flex"
                                    },
                                    children: [Object(Se.jsx)(mt, {
                                        lockPrice: this.state.lockPrice,
                                        markedLoaded: this.props.markedLoaded,
                                        OnLoad: this.props.OnLoad
                                    }), this.Rewards(), Object(Se.jsxs)("div", {
                                        className: "BottomStats",
                                        children: [this.LockPrice(), this.Prize()]
                                    })]
                                })]
                            })
                        }
                    }]), n
                }(r.a.Component));
            Mt.contextType = ve;
            var Rt = Mt,
                At = T ? P.mainnet : P.testnet;

            function Et(e) {
                return Ft.apply(this, arguments)
            }

            function Ft() {
                return (Ft = Object(x.a)(O.a.mark((function e(t) {
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", m.b.promise(t, {
                                    position: m.b.POSITION.TOP_RIGHT,
                                    pending: Ht,
                                    success: Ut,
                                    error: zt
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var Lt, Wt = {
                    autoClose: 1e4,
                    hideProgressBar: !0,
                    newestOnTop: !0
                },
                Ht = {
                    newestOnTop: !0,
                    render: function() {
                        return "Transacting..."
                    },
                    icon: !1
                },
                Ut = Object(o.a)(Object(o.a)({}, Wt), {}, {
                    render: function(e) {
                        var t = e.data;
                        return Object(Se.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [Object(Se.jsx)("p", {
                                style: {
                                    color: "green"
                                },
                                children: "Transaction successful!"
                            }), Object(Se.jsx)("a", {
                                href: At + t.transactionHash,
                                target: "_blank",
                                rel: "noreferrer",
                                children: "View transaction"
                            })]
                        })
                    },
                    icon: !1
                }),
                zt = Object(o.a)(Object(o.a)({}, Wt), {}, {
                    render: function(e) {
                        var t = e.data,
                            n = z(t);
                        console.log(n.console), n.debugNotification && H() && alert(n.debugNotification);
                        var a = null;
                        return "Transaction failed" === n.notification && (a = Object(Se.jsx)("a", {
                            href: At + t.receipt.transactionHash,
                            target: "_blank",
                            rel: "noreferrer",
                            children: "View transaction"
                        })), Object(Se.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [Object(Se.jsxs)("p", {
                                style: {
                                    color: "red"
                                },
                                children: ["Failed: ", n.notification]
                            }), a]
                        })
                    }
                }),
                Gt = n.p + "static/media/paws_up_transparent_tiny.4fa5a7f5.webp",
                Vt = n.p + "static/media/paws_down_transparent_tiny.8cb2d4fd.webp",
                Yt = ["title", "titleId"];

            function Qt() {
                return Qt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, Qt.apply(this, arguments)
            }

            function Kt(e, t) {
                if (null == e) return {};
                var n, a, r = function(e, t) {
                    if (null == e) return {};
                    var n, a, r = {},
                        s = Object.keys(e);
                    for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function qt(e, t) {
                var n = e.title,
                    r = e.titleId,
                    s = Kt(e, Yt);
                return a.createElement("svg", Qt({
                    className: "bi bi-chevron-right",
                    fill: "currentColor",
                    viewBox: "0 0 161.21 161.21",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Lt || (Lt = a.createElement("path", {
                    d: "m71.009 27.775 46.733 48.405c1.6346 1.6305 1.6346 7.6214 0 9.2519l-46.733 48.405c-3.8695 4.0079-18.206-1.9697-14.266-5.909l42.116-47.122-40.444-47.122c-2.5025-3.3083 9.7479-8.8177 12.595-5.909z",
                    fillRule: "evenodd",
                    strokeWidth: 8.346
                })))
            }
            var Jt = a.forwardRef(qt),
                Xt = (n.p, n(383), n(856), function(e) {
                    Object(j.a)(n, e);
                    var t = Object(y.a)(n);

                    function n(e) {
                        var a;
                        return Object(h.a)(this, n), (a = t.call(this, e)).minBalanceAllowedAfterBet = Object.freeze({
                            wei: a.props.web3.utils.toWei("0.0015", "Ether"),
                            ether: .0015
                        }), a.minBetValue = .001, a.state = {
                            betButtonEnabled: !0,
                            betSizeEther: 0,
                            fractionOfMaxBet: 0,
                            referrerAddress: null
                        }, a
                    }
                    return Object(f.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.SetReferrer(), this.timeout = setTimeout((function() {
                                return e.CleanReferrerIfNotApplicable.bind(e)
                            }), 50)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.EnforceMinBetValue()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.timeout)
                        }
                    }, {
                        key: "maxBetEther",
                        get: function() {
                            return this.props.balance.ether - this.minBalanceAllowedAfterBet.ether
                        }
                    }, {
                        key: "BetFunction",
                        get: function() {
                            return this.props.bettingOnBear ? this.props.contract.methods.user_BetBear : this.props.contract.methods.user_BetBull
                        }
                    }, {
                        key: "BetFunctionWithReferrals",
                        get: function() {
                            return this.props.bettingOnBear ? this.props.contract.methods.user_BetBearSpecial : this.props.contract.methods.user_BetBullSpecial
                        }
                    }, {
                        key: "EnforceMinBetValue",
                        value: function() {
                            0 != this.state.betSizeEther && Number(this.state.betSizeEther) < this.minBetValue && this.setState({
                                betSizeEther: this.minBetValue.toFixed(4)
                            })
                        }
                    }, {
                        key: "GetBetSizeFromFraction",
                        value: function(e) {
                            if (void 0 === e) throw new SyntaxError("missing required argument: percent");
                            return (this.maxBetEther * (e / 100)).toFixed(12)
                        }
                    }, {
                        key: "SetReferrer",
                        value: function() {
                            var e = localStorage.getItem("dogebets_referrerAddress"),
                                t = this.props.address == e;
                            this.props.address && !t && this.setState({
                                referrerAddress: localStorage.getItem("dogebets_referrerAddress")
                            })
                        }
                    }, {
                        key: "CleanReferrerIfNotApplicable",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                var t, n, a;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.props.contractReferrals.methods.IsAlreadyReferred(this.props.address).call();
                                        case 2:
                                            t = e.sent, n = localStorage.getItem("dogebets_referrerAddress"), a = this.props.address == n, (t || a) && (localStorage.removeItem("dogebets_referrerAddress"), this.setState({
                                                referrerAddress: null
                                            }));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "HandleManualBetInput",
                        value: function(e) {
                            var t = e.target.value.replace(/[^0-9.]/g, "");
                            this.setState({
                                betSizeEther: t,
                                fractionOfMaxBet: Math.round(Number(t) / this.maxBetEther * 100)
                            })
                        }
                    }, {
                        key: "HandleFractionBetInput",
                        value: function(e) {
                            var t = e.target.value.replace(/[^0-9.]/g, "");
                            this.setState({
                                betSizeEther: this.GetBetSizeFromFraction(t),
                                fractionOfMaxBet: t
                            })
                        }
                    }, {
                        key: "IncrementFractionBetInput",
                        value: function() {
                            var e = this.state.fractionOfMaxBet + 1;
                            e > 100 && (e = 100), this.setState({
                                betSizeEther: this.GetBetSizeFromFraction(e),
                                fractionOfMaxBet: e
                            })
                        }
                    }, {
                        key: "DecrementFractionBetInput",
                        value: function() {
                            var e = this.state.fractionOfMaxBet - 1;
                            e < 0 && (e = 0), this.setState({
                                betSizeEther: this.GetBetSizeFromFraction(e),
                                fractionOfMaxBet: e
                            })
                        }
                    }, {
                        key: "BeginHoldDownToIncreaseBetInput",
                        value: function() {
                            var e = this;
                            this.startedHoldingDownIncrement = setTimeout((function() {
                                e.holdingDownIncrement = setInterval(e.IncrementFractionBetInput.bind(e), 75)
                            }), 800)
                        }
                    }, {
                        key: "StopHoldingDownToIncreaseBetInput",
                        value: function() {
                            clearTimeout(this.startedHoldingDownIncrement), clearInterval(this.holdingDownIncrement)
                        }
                    }, {
                        key: "BeginHoldDownToDecreaseBetInput",
                        value: function() {
                            var e = this;
                            this.startedHoldingDownDecrement = setTimeout((function() {
                                e.holdingDownDecrement = setInterval(e.DecrementFractionBetInput.bind(e), 75)
                            }), 800)
                        }
                    }, {
                        key: "StopHoldingDownToDecreaseBetInput",
                        value: function() {
                            clearTimeout(this.startedHoldingDownDecrement), clearInterval(this.holdingDownDecrement)
                        }
                    }, {
                        key: "PlaceBet",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                var t, n, a = this;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.props.web3 && this.props.contract && this.props.address && !this.RoundNotLoadedYet()) {
                                                e.next = 3;
                                                break
                                            }
                                            return console.warn("no web3/contract/address or round not loaded yet"), e.abrupt("return");
                                        case 3:
                                            if ((t = this.GetBetInWei()) && this.CheckWalletBalanceAgainst(t)) {
                                                e.next = 7;
                                                break
                                            }
                                            return console.warn("no bet size given/insufficient balance"), e.abrupt("return");
                                        case 7:
                                            n = this.state.referrerAddress ? this.BetFunctionWithReferrals(this.props.round.epoch, this.state.referrerAddress).send({
                                                from: this.props.address,
                                                value: t
                                            }) : this.BetFunction(this.props.round.epoch).send({
                                                from: this.props.address,
                                                value: t
                                            }), this.setState({
                                                betButtonEnabled: !1
                                            }), n.then((function() {
                                                return a.setState({
                                                    betButtonEnabled: !0
                                                })
                                            })).catch((function() {
                                                return a.setState({
                                                    betButtonEnabled: !0
                                                })
                                            })), Et(n);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "GetBetInWei",
                        value: function() {
                            var e, t = Number.parseFloat(this.state.betSizeEther).toFixed(12);
                            try {
                                e = this.props.web3.utils.toWei(t, "Ether")
                            } catch (n) {
                                console.error(n), e = 0
                            }
                            return e
                        }
                    }, {
                        key: "CheckWalletBalanceAgainst",
                        value: function(e) {
                            if (!e) throw new SyntaxError("Missing required argument: betSize");
                            return !(e > this.props.balance.wei - this.minBalanceAllowedAfterBet) || (alert("Your balance is too low to make this bet\nWoof!"), !1)
                        }
                    }, {
                        key: "RoundNotLoadedYet",
                        value: function() {
                            return !this.props.round
                        }
                    }, {
                        key: "BetSizeNumericField",
                        value: function() {
                            return Object(Se.jsxs)("label", {
                                className: "BetSize Direct",
                                children: [Object(Se.jsx)("input", {
                                    className: "BetSize Direct",
                                    type: "number",
                                    step: .01,
                                    max: this.maxBetEther,
                                    onInput: this.HandleManualBetInput.bind(this),
                                    value: this.state.betSizeEther
                                }), "BNB"]
                            })
                        }
                    }, {
                        key: "BetSizePercent",
                        value: function() {
                            return Object(Se.jsxs)("label", {
                                className: "BetSize Percent",
                                children: [Object(Se.jsx)("input", {
                                    className: "BetSize Percent",
                                    type: "number",
                                    step: 1,
                                    min: 0,
                                    max: 100,
                                    onInput: this.HandleFractionBetInput.bind(this),
                                    value: this.state.fractionOfMaxBet
                                }), "%"]
                            })
                        }
                    }, {
                        key: "BetSizeSlider",
                        value: function() {
                            return Object(Se.jsx)("div", {
                                className: "slidercontainer",
                                children: Object(Se.jsx)("input", {
                                    className: "sliderInput slider",
                                    id: "myRange",
                                    type: "range",
                                    step: .001,
                                    min: .001,
                                    max: this.maxBetEther,
                                    onInput: this.HandleManualBetInput.bind(this),
                                    value: this.state.betSizeEther
                                })
                            })
                        }
                    }, {
                        key: "BetSizeMax",
                        value: function() {
                            var e = this;
                            return Object(Se.jsx)("button", {
                                className: "MaxButton",
                                onClick: function() {
                                    return e.setState({
                                        betSizeEther: e.maxBetEther,
                                        fractionOfMaxBet: 100
                                    })
                                },
                                children: "MAX"
                            })
                        }
                    }, {
                        key: "BetSizeFixedPercentageButton",
                        value: function(e) {
                            var t = this;
                            if (!e) throw new SyntaxError("missing required argument: percent");
                            return Object(Se.jsxs)("button", {
                                className: "FixedPercentageButton",
                                onClick: function() {
                                    return t.setState({
                                        betSizeEther: t.GetBetSizeFromFraction(e),
                                        fractionOfMaxBet: e
                                    })
                                },
                                children: [e, "%"]
                            })
                        }
                    }, {
                        key: "PositionBeingEntered",
                        value: function() {
                            var e, t;
                            return this.props.bettingOnBear ? (t = E, e = Object(Se.jsx)("img", {
                                src: Vt,
                                alt: "betting on bear"
                            })) : (t = A, e = Object(Se.jsx)("img", {
                                src: Gt,
                                alt: "betting on bull"
                            })), Object(Se.jsx)("div", {
                                id: "BetChosen",
                                onClick: this.props.ToggleBet,
                                style: {
                                    backgroundColor: t
                                },
                                children: e
                            })
                        }
                    }, {
                        key: "WalletBalance",
                        value: function() {
                            var e = Number.parseFloat(this.props.balance.ether).toFixed(4);
                            return Object(Se.jsxs)("p", {
                                className: "Balance",
                                children: ["Balance: ", e, " BNB"]
                            })
                        }
                    }, {
                        key: "BetButton",
                        value: function() {
                            return this.state.betButtonEnabled ? Object(Se.jsx)("div", {
                                className: "BetButton",
                                onClick: this.PlaceBet.bind(this),
                                children: "Place Bet"
                            }) : Object(Se.jsx)("div", {
                                className: "BetButton Disabled",
                                onClick: null,
                                children: "Place Bet"
                            })
                        }
                    }, {
                        key: "CancelButton",
                        value: function() {
                            return Object(Se.jsx)("div", {
                                className: "CancelBet",
                                onClick: this.props.CancelBet,
                                children: "Cancel"
                            })
                        }
                    }, {
                        key: "BetIncrease",
                        value: function() {
                            return Object(Se.jsx)("div", {
                                className: "ChevronButton Up",
                                onClick: this.IncrementFractionBetInput.bind(this),
                                onPointerDown: this.BeginHoldDownToIncreaseBetInput.bind(this),
                                onPointerUp: this.StopHoldingDownToIncreaseBetInput.bind(this),
                                onPointerLeave: this.StopHoldingDownToIncreaseBetInput.bind(this),
                                onContextMenu: function(e) {
                                    return e.preventDefault()
                                },
                                children: Object(Se.jsx)(Jt, {
                                    className: "ChevronGraphic",
                                    alt: "increase"
                                })
                            })
                        }
                    }, {
                        key: "BetDescrease",
                        value: function() {
                            return Object(Se.jsx)("div", {
                                className: "ChevronButton Down",
                                onClick: this.DecrementFractionBetInput.bind(this),
                                onPointerDown: this.BeginHoldDownToDecreaseBetInput.bind(this),
                                onPointerUp: this.StopHoldingDownToDecreaseBetInput.bind(this),
                                onPointerLeave: this.StopHoldingDownToDecreaseBetInput.bind(this),
                                onContextMenu: function(e) {
                                    return e.preventDefault()
                                },
                                children: Object(Se.jsx)(Jt, {
                                    className: "ChevronGraphic",
                                    alt: "decrease"
                                })
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(Se.jsxs)("div", {
                                className: "SetPositionCard",
                                children: [Object(Se.jsxs)("div", {
                                    className: "CardHeader",
                                    children: [Object(Se.jsxs)("div", {
                                        className: "HeaderControls",
                                        children: [Object(Se.jsx)("div", {
                                            className: "BackArrow",
                                            onClick: this.props.CancelBet
                                        }), this.PositionBeingEntered()]
                                    }), Object(Se.jsxs)("div", {
                                        className: "RoundNumber",
                                        children: ["Betting on #", this.props.round ? this.props.round.epoch : "-"]
                                    })]
                                }), Object(Se.jsxs)("div", {
                                    className: "BetControls",
                                    children: [Object(Se.jsxs)("div", {
                                        className: "Group",
                                        children: [this.BetDescrease(), this.BetSizePercent(), this.BetIncrease()]
                                    }), Object(Se.jsx)("div", {
                                        id: "BetSize",
                                        children: this.BetSizeNumericField()
                                    }), this.BetSizeSlider(), Object(Se.jsxs)("div", {
                                        className: "Group Percentages",
                                        children: [this.BetSizeFixedPercentageButton(10), this.BetSizeFixedPercentageButton(25), this.BetSizeFixedPercentageButton(50), this.BetSizeFixedPercentageButton(75), this.BetSizeMax()]
                                    }), this.WalletBalance(), Object(Se.jsxs)("div", {
                                        id: "BetButtons",
                                        children: [this.CancelButton(), this.BetButton()]
                                    })]
                                })]
                            })
                        }
                    }]), n
                }(r.a.Component)),
                Zt = Xt,
                _t = n.p + "static/media/paws_up_entered.4da59a87.png",
                $t = n.p + "static/media/paws_down_entered.e7d7e3a2.png",
                en = function(e) {
                    Object(j.a)(n, e);
                    var t = Object(y.a)(n);

                    function n(e) {
                        var a;
                        return Object(h.a)(this, n), (a = t.call(this, e)).rewardDecimalsToShow = 4, a.state = {}, a
                    }
                    return Object(f.a)(n, [{
                        key: "isMobile",
                        get: function() {
                            return this.context
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "RoundNotLoadedYet",
                        value: function() {
                            return !this.props.round
                        }
                    }, {
                        key: "Prize",
                        value: function() {
                            var e;
                            if (this.RoundNotLoadedYet()) e = null;
                            else {
                                var t = this.props.round,
                                    n = ((Number(t.bullAmount) + Number(t.bearAmount)) / Math.pow(10, 18)).toFixed(this.rewardDecimalsToShow);
                                e = Object(Se.jsxs)("p", {
                                    className: "PrizePool",
                                    children: ["Prize pool: ", n, "\xa0BNB"]
                                })
                            }
                            return e
                        }
                    }, {
                        key: "ThumbsImageFor",
                        value: function(e) {
                            if (!e) throw new SyntaxError("missing required argument: position");
                            var t = null;
                            return "bear" === e ? t = this.props.enteredPosition === M.bear ? Object(Se.jsx)("img", {
                                src: $t,
                                alt: "down"
                            }) : Object(Se.jsx)("img", {
                                src: pt,
                                alt: "down"
                            }) : "bull" === e && (t = this.props.enteredPosition === M.bull ? Object(Se.jsx)("img", {
                                src: _t,
                                alt: "up"
                            }) : Object(Se.jsx)("img", {
                                src: dt,
                                alt: "up"
                            })), Object(Se.jsx)("div", {
                                className: "BetThumbs",
                                children: t
                            })
                        }
                    }, {
                        key: "BetBear",
                        value: function() {
                            return Object(Se.jsx)("button", {
                                className: "BearDown",
                                onClick: this.props.BetBear,
                                children: Object(Se.jsxs)("div", {
                                    className: "BetThumbsContainer",
                                    children: [this.ThumbsImageFor("bear"), Object(Se.jsxs)("div", {
                                        className: "Metrics",
                                        children: ["Down", Object(Se.jsx)("p", {
                                            className: "Payout",
                                            children: this.Payout("bear")
                                        })]
                                    })]
                                })
                            })
                        }
                    }, {
                        key: "BetBull",
                        value: function() {
                            return Object(Se.jsx)("button", {
                                className: "BullUp",
                                onClick: this.props.BetBull,
                                children: Object(Se.jsxs)("div", {
                                    className: "BetThumbsContainer",
                                    children: [this.ThumbsImageFor("bull"), Object(Se.jsxs)("div", {
                                        className: "Metrics",
                                        children: ["Up", Object(Se.jsx)("p", {
                                            className: "Payout",
                                            children: this.Payout("bull")
                                        })]
                                    })]
                                })
                            })
                        }
                    }, {
                        key: "CurrencyIcon",
                        value: function() {
                            if (this.isMobile) {
                                var e = this.DoNotRotateIfBNB();
                                return Object(Se.jsx)("div", {
                                    className: "Currency",
                                    style: e,
                                    children: Object(Se.jsx)("img", {
                                        src: this.props.currencyImage
                                    })
                                })
                            }
                            return Object(Se.jsx)("div", {
                                className: "Spacer"
                            })
                        }
                    }, {
                        key: "DoNotRotateIfBNB",
                        value: function() {
                            return "BNB" == this.props.tickerSymbol ? {
                                transform: "rotate(+25deg)"
                            } : {}
                        }
                    }, {
                        key: "Payout",
                        value: function(e) {
                            var t;
                            if (this.RoundNotLoadedYet()) t = null;
                            else {
                                var n, a = this.props.round,
                                    r = Number(a.bullAmount) + Number(a.bearAmount);
                                if ("bear" === e) n = Number(a.bearAmount);
                                else {
                                    if ("bull" !== e) throw new SyntaxError('missing "side" argument in "Payout" function in "CardNext" class');
                                    n = Number(a.bullAmount)
                                }
                                t = (0 === n ? "0.00" : (r / n).toFixed(2)) + "x"
                            }
                            return t
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(Se.jsxs)("div", {
                                className: "CardNext",
                                children: [Object(Se.jsx)("div", {
                                    className: "CardHeader",
                                    children: Object(Se.jsxs)("div", {
                                        className: "RoundNumber",
                                        children: ["Next Round #", this.props.round ? this.props.round.epoch : "-"]
                                    })
                                }), Object(Se.jsxs)("div", {
                                    className: "OverviewContent",
                                    children: [Object(Se.jsxs)("div", {
                                        className: "BetButtons",
                                        children: [this.BetBull(), this.CurrencyIcon(), this.BetBear()]
                                    }), this.Prize()]
                                })]
                            })
                        }
                    }]), n
                }(r.a.Component);
            en.contextType = ve;
            var tn = en,
                nn = function(e) {
                    Object(j.a)(n, e);
                    var t = Object(y.a)(n);

                    function n(e) {
                        var a;
                        return Object(h.a)(this, n), (a = t.call(this, e)).state = {
                            round: void 0,
                            balance: null,
                            expired: !1,
                            alreadyEntered: !1,
                            userBetData: null,
                            bettingInProgress: !1,
                            bettingOnBear: !1
                        }, a
                    }
                    return Object(f.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.web3 = this.props.web3, this.timeout = setTimeout(this.Refresh.bind(this), 450), this.timeout2 = setTimeout(this.Refresh.bind(this), 1450), this.timer = setInterval(Object(x.a)(O.a.mark((function t() {
                                return O.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            e.Refresh();
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))), 5e3)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.UpdateWeb3Variables(), this.HandleRoundExpiration(), this.state.bettingInProgress && this.state.alreadyEntered && this.CancelBet()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.timeout), clearTimeout(this.timeout2), clearInterval(this.timer)
                        }
                    }, {
                        key: "UpdateWeb3Variables",
                        value: function() {
                            Object.is(this.web3, this.props.web3) || console.log("Decided to update this.web3 in CardNext"), this.web3 = this.props.web3
                        }
                    }, {
                        key: "HandleRoundExpiration",
                        value: function() {
                            this.RoundExpired() && !this.state.expired ? (this.setState({
                                bettingInProgress: !1,
                                expired: !0
                            }), console.log("#" + this.props.roundID + " marked as expired")) : !this.RoundExpired() && this.state.expired && (this.setState({
                                bettingInProgress: !1,
                                expired: !1
                            }), console.log("#" + this.props.roundID + " marked as no longer expired"))
                        }
                    }, {
                        key: "Refresh",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            this.UpdateRoundData(), this.UpdateBalance();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "UpdateBalance",
                        value: function() {
                            JSON.stringify(this.state.balance) !== JSON.stringify(g.userBalance) && this.setState({
                                balance: g.userBalance
                            })
                        }
                    }, {
                        key: "UpdateRoundData",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                var t, n;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = this.props.contract.rpc, !this.state.alreadyEntered) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.t0 = this, e.next = 5, t.methods.Rounds(this.props.roundID).call();
                                        case 5:
                                            e.t1 = e.sent, e.t2 = {
                                                round: e.t1
                                            }, e.t0.setState.call(e.t0, e.t2), e.next = 30;
                                            break;
                                        case 10:
                                            if (this.props.address) {
                                                e.next = 19;
                                                break
                                            }
                                            return e.t3 = this, e.next = 14, t.methods.Rounds(this.props.roundID).call();
                                        case 14:
                                            e.t4 = e.sent, e.t5 = {
                                                round: e.t4
                                            }, e.t3.setState.call(e.t3, e.t5), e.next = 30;
                                            break;
                                        case 19:
                                            return e.next = 21, t.methods.Bets(this.props.roundID, this.props.address).call();
                                        case 21:
                                            return n = e.sent, e.t6 = this, e.next = 25, t.methods.Rounds(this.props.roundID).call();
                                        case 25:
                                            e.t7 = e.sent, e.t8 = n, e.t9 = this.CheckIfUserAlreadyBet(n), e.t10 = {
                                                round: e.t7,
                                                userBetData: e.t8,
                                                alreadyEntered: e.t9
                                            }, e.t6.setState.call(e.t6, e.t10);
                                        case 30:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "CheckIfUserAlreadyBet",
                        value: function(e) {
                            if (!e) throw new SyntaxError("missing required argument: userBetData");
                            return e.amount > 0
                        }
                    }, {
                        key: "GetSideUserBetOn",
                        value: function() {
                            if (!this.state.alreadyEntered) return -1;
                            var e = Number(this.state.userBetData.position);
                            return e === M.bull ? M.bull : e === M.bear ? M.bear : -1
                        }
                    }, {
                        key: "RoundNotLoadedYet",
                        value: function() {
                            return !this.state.round
                        }
                    }, {
                        key: "RoundExpired",
                        value: function() {
                            return !this.RoundNotLoadedYet() && 1e3 * this.state.round.lockTimestamp < Date.now()
                        }
                    }, {
                        key: "BetBear",
                        value: function() {
                            this.RoundNotLoadedYet() || (this.props.address ? Z() ? this.state.alreadyEntered ? alert("You already bet this round!") : this.setState({
                                bettingInProgress: !0,
                                bettingOnBear: !0
                            }) : se() : re())
                        }
                    }, {
                        key: "BetBull",
                        value: function() {
                            this.RoundNotLoadedYet() || (this.props.address ? Z() ? this.state.alreadyEntered ? alert("You already bet this round!") : this.setState({
                                bettingInProgress: !0,
                                bettingOnBear: !1
                            }) : se() : re())
                        }
                    }, {
                        key: "ToggleSelectedSide",
                        value: function() {
                            this.setState({
                                bettingInProgress: !0,
                                bettingOnBear: !this.state.bettingOnBear
                            })
                        }
                    }, {
                        key: "CancelBet",
                        value: function() {
                            this.setState({
                                bettingInProgress: !1,
                                bettingOnBear: !1
                            })
                        }
                    }, {
                        key: "ExecutionNotice",
                        value: function() {
                            return this.RoundExpired() ? Object(Se.jsx)("div", {
                                className: "CurrentContent",
                                children: Object(Se.jsx)("p", {
                                    className: "glowing",
                                    children: "Executing..."
                                })
                            }) : null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.expired ? Object(Se.jsx)("div", {
                                className: "CardNext",
                                children: this.ExecutionNotice()
                            }) : this.state.bettingInProgress && null !== this.props.contract.user ? Object(Se.jsx)(Zt, {
                                round: this.state.round,
                                web3: this.web3,
                                contract: this.props.contract.user,
                                contractReferrals: this.props.contractReferrals,
                                address: this.props.address,
                                balance: this.state.balance,
                                bettingOnBear: this.state.bettingOnBear,
                                CancelBet: this.CancelBet.bind(this),
                                ToggleBet: this.ToggleSelectedSide.bind(this)
                            }) : Object(Se.jsx)(tn, {
                                round: this.state.round,
                                enteredPosition: this.GetSideUserBetOn(),
                                decimalPlaces: this.props.decimalPlaces,
                                tickerSymbol: this.props.tickerSymbol,
                                currencyImage: this.props.currencyImage,
                                BetBull: this.BetBull.bind(this),
                                BetBear: this.BetBear.bind(this)
                            })
                        }
                    }]), n
                }(r.a.Component),
                an = nn,
                rn = n.p + "static/media/dogehouse.745dadb2.svg",
                sn = n.p + "static/media/BearWon.981ab52a.svg",
                cn = n.p + "static/media/BullWon.3a420378.svg",
                on = (n(384), n.p + "static/media/DogeWinSwagRed.42d84a3f.webp"),
                un = n.p + "static/media/DogeWinSwagGreen.ab57ff86.webp",
                ln = function(e) {
                    Object(j.a)(n, e);
                    var t = Object(y.a)(n);

                    function n(e) {
                        var a;
                        return Object(h.a)(this, n), (a = t.call(this, e)).state = {
                            bearVictory: !1
                        }, a
                    }
                    return Object(f.a)(n, [{
                        key: "victoryImage",
                        get: function() {
                            return this.state.bearVictory ? on : un
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            if (null === this.props.bearVictory || void 0 === this.props.bearVictory) throw new SyntaxError("missing required props: bearVictory");
                            this.props.bearVictory ? this.setState({
                                bearVictory: !0
                            }) : this.setState({
                                bearVictory: !1
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.props.bearVictory !== this.state.bearVictory && this.setState({
                                bearVictory: this.props.bearVictory
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(Se.jsx)("div", {
                                className: "CardPrevious Backside",
                                children: Object(Se.jsxs)("div", {
                                    className: "VictoryImageContainer",
                                    style: {
                                        backgroundImage: "url(".concat(this.victoryImage, ")")
                                    },
                                    children: [Object(Se.jsx)("div", {
                                        className: "Top",
                                        children: Object(Se.jsx)("p", {
                                            children: "Congratulations!"
                                        })
                                    }), Object(Se.jsx)("div", {
                                        className: "DogeFace"
                                    }), Object(Se.jsxs)("div", {
                                        className: "Goblet",
                                        children: [Object(Se.jsxs)("div", {
                                            className: "Reward",
                                            children: [Object(Se.jsx)("p", {
                                                children: this.props.amountWon
                                            }), Object(Se.jsx)("img", {
                                                src: vt,
                                                alt: "BNB"
                                            })]
                                        }), Object(Se.jsx)("p", {
                                            className: "RoundNumber",
                                            children: this.props.roundNumber
                                        })]
                                    }), Object(Se.jsx)("div", {
                                        className: "Bottom"
                                    })]
                                })
                            })
                        }
                    }]), n
                }(r.a.Component),
                dn = r.a.memo(ln),
                pn = function(e) {
                    Object(j.a)(n, e);
                    var t = Object(y.a)(n);

                    function n(e) {
                        var a;
                        return Object(h.a)(this, n), (a = t.call(this, e)).rewardDecimalsToShow = 4, a.state = {
                            round: void 0,
                            status: void 0,
                            houseFee: null,
                            claimable: !1,
                            refundable: !1,
                            userBetData: null,
                            showingBackside: !1
                        }, a
                    }
                    return Object(f.a)(n, [{
                        key: "roundStatus",
                        get: function() {
                            return {
                                bull: 0,
                                bear: 1,
                                tie: 2,
                                canceled: 3,
                                error: 4
                            }
                        }
                    }, {
                        key: "amountWon",
                        get: function() {
                            if (this.RoundNotLoadedYet() || null === this.state.userBetData) return null;
                            if (0 === Number(this.state.round.rewardBaseCalAmount)) return 0;
                            var e = this.state.round.rewardAmount / this.state.round.rewardBaseCalAmount,
                                t = this.state.userBetData.amount * e / Math.pow(10, 18);
                            return (Math.floor(t * Math.pow(10, this.rewardDecimalsToShow)) / Math.pow(10, this.rewardDecimalsToShow)).toFixed(this.rewardDecimalsToShow)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.timeout = setTimeout((function() {
                                e.UpdateRoundData(), e.UpdateHouseFee()
                            }), 450), this.refresher = setInterval(this.UpdateRoundData.bind(this), 3e3), this.refresherBetData = setInterval(this.UpdateUserBetData.bind(this), 3e3)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.timeout), clearInterval(this.refresher), this.refresherBetData && clearInterval(this.refresherBetData), this.backsideTimeout && clearTimeout(this.backsideTimeout)
                        }
                    }, {
                        key: "UpdateRoundData",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.props.roundID) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (this.props.address) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.t0 = this, e.next = 6, this.props.contract.rpc.methods.Rounds(this.props.roundID).call();
                                        case 6:
                                            e.t1 = e.sent, e.t2 = {
                                                round: e.t1,
                                                refundable: !1,
                                                claimable: !1
                                            }, e.t0.setState.call(e.t0, e.t2), e.next = 23;
                                            break;
                                        case 11:
                                            return e.t3 = this, e.next = 14, this.props.contract.rpc.methods.Rounds(this.props.roundID).call();
                                        case 14:
                                            return e.t4 = e.sent, e.next = 17, this.props.contract.user.methods.Refundable(this.props.roundID, this.props.address).call();
                                        case 17:
                                            return e.t5 = e.sent, e.next = 20, this.props.contract.user.methods.Claimable(this.props.roundID, this.props.address).call();
                                        case 20:
                                            e.t6 = e.sent, e.t7 = {
                                                round: e.t4,
                                                refundable: e.t5,
                                                claimable: e.t6
                                            }, e.t3.setState.call(e.t3, e.t7);
                                        case 23:
                                            this.UpdateRoundStatus();
                                        case 24:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "UpdateUserBetData",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                var t;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.props.address) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (null === this.state.userBetData) {
                                                e.next = 8;
                                                break
                                            }
                                            clearInterval(this.refresherBetData), e.next = 12;
                                            break;
                                        case 8:
                                            return e.next = 10, this.props.contract.rpc.methods.Bets(this.props.roundID, this.props.address).call();
                                        case 10:
                                            t = e.sent, this.setState({
                                                userBetData: t
                                            });
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "UpdateHouseFee",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.props.contract.rpc) {
                                                e.next = 3;
                                                break
                                            }
                                            return setTimeout(this.UpdateHouseFee.bind(this), 500), e.abrupt("return");
                                        case 3:
                                            return e.t0 = this, e.t1 = Number, e.next = 7, this.props.contract.rpc.methods.rewardRate().call();
                                        case 7:
                                            e.t2 = e.sent, e.t3 = (0, e.t1)(e.t2), e.t4 = 100 - e.t3, e.t5 = {
                                                houseFee: e.t4
                                            }, e.t0.setState.call(e.t0, e.t5);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "UpdateRoundStatus",
                        value: function() {
                            if (!this.RoundNotLoadedYet()) {
                                var e, t = Number(this.state.round.lockPrice),
                                    n = Number(this.state.round.closePrice);
                                (e = this.state.round.canceled ? this.roundStatus.canceled : this.state.round.closed ? t > n ? this.roundStatus.bear : t < n ? this.roundStatus.bull : this.roundStatus.tie : this.roundStatus.error) !== this.state.status && this.setState({
                                    status: e
                                })
                            }
                        }
                    }, {
                        key: "ShowBackside",
                        value: function() {
                            var e = this;
                            this.setState({
                                showingBackside: !0
                            }), this.backsideTimeout = setTimeout((function() {
                                return e.setState({
                                    showingBackside: !1
                                })
                            }), 1e4)
                        }
                    }, {
                        key: "ShowDisclaimer",
                        value: function() {
                            alert("A " + this.state.houseFee + "% dogehouse fee is included with all claimed winnings.\nThere is no fee for a tie or a loss.")
                        }
                    }, {
                        key: "Prize",
                        value: function() {
                            var e;
                            if (this.RoundNotLoadedYet()) e = null;
                            else {
                                var t = this.state.round,
                                    n = ((Number(t.bullAmount) + Number(t.bearAmount)) / Math.pow(10, 18)).toFixed(this.rewardDecimalsToShow);
                                e = Object(Se.jsxs)("p", {
                                    className: "PrizePool",
                                    children: ["Prize pool: ", n, "\xa0BNB "]
                                })
                            }
                            return e
                        }
                    }, {
                        key: "Payout",
                        value: function() {
                            var e, t;
                            if (this.RoundNotLoadedYet()) e = null;
                            else {
                                var n = this.state.round,
                                    a = Number(n.bullAmount) + Number(n.bearAmount);
                                switch (this.state.status) {
                                    case this.roundStatus.bull:
                                        t = 0 === Number(n.bullAmount) ? 0 : (a / Number(n.bullAmount)).toFixed(2);
                                        break;
                                    case this.roundStatus.bear:
                                        t = 0 === Number(n.bearAmount) ? 0 : (a / Number(n.bearAmount)).toFixed(2);
                                        break;
                                    case this.roundStatus.tie:
                                    case this.roundStatus.canceled:
                                    case this.roundStatus.error:
                                        t = "1.00";
                                        break;
                                    default:
                                        t = "Pending..."
                                }
                                e = Object(Se.jsxs)("p", {
                                    id: "Payout",
                                    children: ["Payout: ", t, "x"]
                                })
                            }
                            return e
                        }
                    }, {
                        key: "LockPrice",
                        value: function() {
                            var e;
                            if (this.RoundNotLoadedYet()) e = null;
                            else {
                                var t = Number(this.state.round.lockPrice) / Math.pow(10, 8);
                                e = Object(Se.jsxs)("p", {
                                    className: "Price",
                                    children: ["Locked: ", Object(Se.jsxs)("span", {
                                        className: "yellowish",
                                        children: ["$ ", Object(Se.jsx)(lt, {
                                            price: t
                                        })]
                                    })]
                                })
                            }
                            return e
                        }
                    }, {
                        key: "ClosePrice",
                        value: function() {
                            var e;
                            if (this.RoundNotLoadedYet()) e = null;
                            else {
                                var t = Number(this.state.round.closePrice) / Math.pow(10, 8);
                                e = Object(Se.jsxs)("p", {
                                    className: "Price",
                                    children: ["Closed: ", Object(Se.jsxs)("span", {
                                        className: "yellowish",
                                        children: ["$ ", Object(Se.jsx)(lt, {
                                            price: t
                                        })]
                                    })]
                                })
                            }
                            return e
                        }
                    }, {
                        key: "PriceDifference",
                        value: function() {
                            var e;
                            if (this.RoundNotLoadedYet()) e = null;
                            else {
                                var t = (Number(this.state.round.closePrice) - Number(this.state.round.lockPrice)) / Math.pow(10, 8);
                                e = t > 0 ? Object(Se.jsxs)("p", {
                                    className: "Difference",
                                    style: {
                                        color: A
                                    },
                                    children: ["$", Object(Se.jsx)(lt, {
                                        price: t
                                    })]
                                }) : t < 0 ? Object(Se.jsxs)("p", {
                                    className: "Difference",
                                    style: {
                                        color: E
                                    },
                                    children: ["$", Object(Se.jsx)(lt, {
                                        price: t
                                    })]
                                }) : Object(Se.jsxs)("p", {
                                    className: "Difference",
                                    style: {
                                        color: F
                                    },
                                    children: ["$", Object(Se.jsx)(lt, {
                                        price: t
                                    })]
                                })
                            }
                            return e
                        }
                    }, {
                        key: "Prices",
                        value: function() {
                            return Object(Se.jsxs)("div", {
                                className: "Enclosure Upper",
                                children: [Object(Se.jsx)("div", {
                                    className: "Locked",
                                    children: this.LockPrice()
                                }), Object(Se.jsx)("div", {
                                    className: "Closed",
                                    children: this.ClosePrice()
                                }), this.PriceDifference()]
                            })
                        }
                    }, {
                        key: "RoundResults",
                        value: function() {
                            var e;
                            switch (this.state.status) {
                                case this.roundStatus.bull:
                                    e = Object(Se.jsx)("img", {
                                        src: cn,
                                        alt: "bullwon"
                                    });
                                    break;
                                case this.roundStatus.bear:
                                    e = Object(Se.jsx)("img", {
                                        src: sn,
                                        alt: "bearwon"
                                    });
                                    break;
                                case this.roundStatus.tie:
                                    e = "Tied";
                                    break;
                                case this.roundStatus.canceled:
                                    e = "Refunded";
                                    break;
                                case this.roundStatus.error:
                                    e = "Error";
                                    break;
                                default:
                                    e = "Pending..."
                            }
                            return Object(Se.jsx)("div", {
                                className: "Status",
                                children: e
                            })
                        }
                    }, {
                        key: "Claim",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                var t;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.RoundNotLoadedYet()) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            t = this.props.contract.user.methods.user_Claim([this.props.roundID]).send({
                                                from: this.props.address
                                            }), this.state.claimable ? Et(t).then(this.ShowBackside.bind(this)) : Et(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "ClaimButton",
                        value: function() {
                            var e;
                            return e = this.state.claimable ? Object(Se.jsx)("button", {
                                className: "ClaimButton",
                                onClick: this.Claim.bind(this),
                                children: "Claim"
                            }) : this.state.refundable ? Object(Se.jsx)("button", {
                                className: "RefundButton",
                                onClick: this.Claim.bind(this),
                                children: "Refund"
                            }) : null, Object(Se.jsx)("div", {
                                children: e
                            })
                        }
                    }, {
                        key: "Disclaimer",
                        value: function() {
                            return Object(Se.jsxs)("p", {
                                children: [Object(Se.jsxs)("button", {
                                    onClick: this.ShowDisclaimer.bind(this),
                                    children: [" ", Object(Se.jsx)("img", {
                                        src: rn
                                    }), " "]
                                }), "(", this.state.houseFee, "% Dogehouse Fee)"]
                            })
                        }
                    }, {
                        key: "RoundNotLoadedYet",
                        value: function() {
                            return !this.state.round
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.showingBackside ? Object(Se.jsx)(dn, {
                                bearVictory: this.state.status === this.roundStatus.bear,
                                roundNumber: this.props.roundID,
                                amountWon: this.amountWon
                            }) : Object(Se.jsxs)("div", {
                                className: "CardPrevious",
                                children: [Object(Se.jsx)("div", {
                                    className: "CardHeader",
                                    children: Object(Se.jsxs)("div", {
                                        className: "RoundNumber",
                                        children: ["Previous Round #", this.state.round ? this.state.round.epoch : "-"]
                                    })
                                }), Object(Se.jsxs)("div", {
                                    className: "Container yellowish",
                                    children: [this.Prices(), this.Payout(), Object(Se.jsx)("div", {
                                        id: "Disclaimer",
                                        children: this.Disclaimer()
                                    }), Object(Se.jsxs)("div", {
                                        className: "Enclosure Lower",
                                        children: [this.RoundResults(), this.ClaimButton()]
                                    }), this.Prize()]
                                })]
                            })
                        }
                    }]), n
                }(r.a.Component),
                bn = pn,
                mn = n.p + "static/media/Arrow.4f53184c.svg";
            n(385);
            var hn = function(e) {
                var t = Object(a.useState)(null),
                    n = Object(u.a)(t, 2),
                    r = n[0],
                    s = n[1],
                    i = Object.freeze({
                        bull: 0,
                        bear: 1,
                        other: 2
                    });

                function c() {
                    return (c = Object(x.a)(O.a.mark((function e() {
                        var t, n;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, o();
                                case 2:
                                    t = e.sent, null !== (n = d(t)) && n !== r && s(n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function o() {
                    return l.apply(this, arguments)
                }

                function l() {
                    return (l = Object(x.a)(O.a.mark((function t() {
                        var n;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e.roundID) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", null);
                                case 2:
                                    return t.next = 4, e.contract.methods.Rounds(e.roundID).call();
                                case 4:
                                    return n = t.sent, t.abrupt("return", n);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function d(e) {
                    if (!e) return null;
                    var t = Number(e.lockPrice),
                        n = Number(e.closePrice);
                    return e.canceled && i.other, e.closed ? t > n ? i.bear : t < n ? i.bull : i.other : i.other
                }

                function p() {
                    var t, n = .6,
                        a = e.roundID.toString().length,
                        r = e.roundID;
                    a < 4 ? t = 1.5 * n : a > 4 && a <= 5 ? t = .51 : a > 5 ? (t = n, r = ".." + e.roundID.toString().slice(-3)) : t = n;
                    var s = t.toFixed(2) + "em";
                    return Object(Se.jsx)("p", {
                        className: "round-number",
                        style: {
                            fontSize: s
                        },
                        children: r
                    })
                }
                return Object(a.useEffect)((function() {
                    ! function() {
                        c.apply(this, arguments)
                    }()
                }), [e.roundID]), e.contract && e.roundID && null !== r ? function() {
                    var e, t;
                    switch (r) {
                        case i.bear:
                            e = Object(Se.jsx)("div", {
                                className: "light red",
                                children: Object(Se.jsx)("img", {
                                    src: mn
                                })
                            }), t = Object(Se.jsx)("div", {
                                className: "light red-text",
                                children: p()
                            });
                            break;
                        case i.bull:
                            e = Object(Se.jsx)("div", {
                                className: "light green-text",
                                children: p()
                            }), t = Object(Se.jsx)("div", {
                                className: "light green",
                                children: Object(Se.jsx)("img", {
                                    src: mn
                                })
                            });
                            break;
                        case i.other:
                            e = Object(Se.jsx)("div", {
                                className: "light white dark-text",
                                children: p()
                            }), t = Object(Se.jsx)("div", {
                                className: "light white dark-text",
                                children: p()
                            });
                            break;
                        default:
                            e = null, t = null
                    }
                    return Object(Se.jsxs)("div", {
                        className: "section",
                        children: [e, t]
                    })
                }() : Object(Se.jsx)("p", {
                    style: {
                        color: "blueviolet"
                    },
                    children: "Loading..."
                })
            };
            var fn, jn = function(e) {
                    var t = e.contract.rpc,
                        n = Object(a.useState)(Number(e.lastEndedRoundID)),
                        r = Object(u.a)(n, 2),
                        s = r[0],
                        i = r[1];

                    function c() {
                        return s - 10 < 1 ? s : 10
                    }
                    return Object(a.useEffect)((function() {
                        Number(e.lastEndedRoundID) !== s && i(Number(e.lastEndedRoundID))
                    }), [e.lastEndedRoundID, s]), Object(Se.jsx)("div", {
                        className: "stoplight",
                        children: function() {
                            for (var e = [], n = c(); n > 0; n--) {
                                var a = s - c() + n,
                                    r = Object(Se.jsx)(hn, {
                                        roundID: a,
                                        contract: t
                                    }, a);
                                e.push(r)
                            }
                            return Object(Se.jsx)("div", {
                                children: e
                            })
                        }()
                    })
                },
                yn = ["title", "titleId"];

            function xn() {
                return xn = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, xn.apply(this, arguments)
            }

            function vn(e, t) {
                if (null == e) return {};
                var n, a, r = function(e, t) {
                    if (null == e) return {};
                    var n, a, r = {},
                        s = Object.keys(e);
                    for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function On(e, t) {
                var n = e.title,
                    r = e.titleId,
                    s = vn(e, yn);
                return a.createElement("svg", xn({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, fn || (fn = a.createElement("path", {
                    d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                })))
            }
            var wn = a.forwardRef(On);
            n.p, n(857);
            var gn, kn, Bn = function(e) {
                    var t = Object(a.useState)(null),
                        n = Object(u.a)(t, 2),
                        r = n[0],
                        s = n[1],
                        i = Object(a.useState)(null),
                        c = Object(u.a)(i, 2),
                        o = c[0],
                        l = c[1],
                        d = Object(a.useState)(null),
                        p = Object(u.a)(d, 2),
                        b = (p[0], p[1]),
                        m = Object(a.useContext)(ye);

                    function h() {
                        null === r ? f() : (f(), function() {
                            y.apply(this, arguments)
                        }())
                    }

                    function f() {
                        return j.apply(this, arguments)
                    }

                    function j() {
                        return (j = Object(x.a)(O.a.mark((function e() {
                            var t;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = Number, e.next = 3, m.contract.rpc.methods.currentEpoch().call();
                                    case 3:
                                        e.t1 = e.sent, (t = (0, e.t0)(e.t1)) !== r && s(t);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function y() {
                        return (y = Object(x.a)(O.a.mark((function e() {
                            var t;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, m.contract.rpc.methods.Rounds(r).call();
                                    case 2:
                                        t = e.sent, (T() || t.epoch !== o.epoch) && l(t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function v() {
                        return Object(Se.jsxs)("p", {
                            className: "Duration",
                            children: ["Round legth = ", m.helper.GetRoundDurationFormatted()]
                        })
                    }

                    function w() {
                        return T() ? null : Object(Se.jsx)(xt, {
                            targetTimestamp: o.lockTimestamp,
                            roundDuration: m.helper.GetRoundDuration(),
                            ongoingMessage: "Next round",
                            endedMessage: "Executing contract",
                            showImage: !1
                        })
                    }

                    function g() {
                        return Object(Se.jsxs)("div", {
                            className: "ArrowControls",
                            children: [Object(Se.jsx)("button", {
                                children: " "
                            }), Object(Se.jsx)("button", {
                                children: " "
                            })]
                        })
                    }

                    function k() {
                        return Object(Se.jsxs)("div", {
                            className: "Extras Timings",
                            children: [Object(Se.jsx)(wn, {
                                className: "Clock"
                            }), Object(Se.jsxs)("div", {
                                children: [Object(Se.jsx)(w, {}), Object(Se.jsx)(v, {})]
                            })]
                        })
                    }

                    function B() {
                        return Object(Se.jsx)("div", {
                            className: "Extras Buttons noselect"
                        })
                    }

                    function T() {
                        return !o
                    }
                    return Object(a.useEffect)((function() {
                        b(m.helper.currentPrice)
                    }), [m.helper.currentPrice]), Object(a.useEffect)((function() {
                        var e = setTimeout(h, 450),
                            t = setInterval(h, 3e3);
                        return function() {
                            clearTimeout(e), clearInterval(t)
                        }
                    }), [o, r]), Object(Se.jsxs)("div", {
                        className: "Headline",
                        children: [Object(Se.jsx)(B, {}), Object(Se.jsx)("div", {
                            className: "CentralElement",
                            children: Object(Se.jsxs)("div", {
                                className: "Hero",
                                children: [Object(Se.jsx)("img", {
                                    className: "Symbol",
                                    src: m.logo
                                }), Object(Se.jsx)(g, {}), Object(Se.jsx)("div", {
                                    className: "Currency",
                                    children: Object(Se.jsxs)("p", {
                                        className: "Pair",
                                        children: [m.tickerSymbol, "/USDT"]
                                    })
                                })]
                            })
                        }), Object(Se.jsx)(k, {})]
                    })
                },
                Tn = n(76),
                Nn = n.n(Tn),
                Sn = n(407),
                Cn = (n(870), n(871), function(e) {
                    Object(j.a)(n, e);
                    var t = Object(y.a)(n);

                    function n(e) {
                        var a;
                        return Object(h.a)(this, n), (a = t.call(this, e)).configuration = Object.freeze({
                            from: "0x55d398326f99059fF775485246999027B3197955",
                            to: "BNB",
                            fromChain: "BSC",
                            toChain: "BSC",
                            amount: 0,
                            iframe: "flex",
                            hideSelectionFrom: !1,
                            hideSelectionTo: !1,
                            theme: "dark",
                            background: L,
                            injectTokens: {
                                eth: ["0xd123575d94a7ad9bff3ad037ae9d4d52f41a7518"],
                                bsc: ["0x8aed24bf6e0247be51c57d68ad32a176bf86f4d9", "0x55d398326f99059fF775485246999027B3197955"]
                            },
                            slippagePercent: {
                                instantTrades: 5,
                                crossChain: 12
                            }
                        }), a.state = {
                            isVisible: !1
                        }, a
                    }
                    return Object(f.a)(n, [{
                        key: "isVisible",
                        get: function() {
                            return this.state.isVisible
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = document.createElement("script");
                            t.src = "https://widgets.rubic.exchange/iframe/bundle.min.js", t.async = !0, t.onload = function() {
                                return e.ScriptLoaded()
                            }, document.head.appendChild(t)
                        }
                    }, {
                        key: "ScriptLoaded",
                        value: function() {
                            window.rubicWidget.init(this.configuration)
                        }
                    }, {
                        key: "MakeVisible",
                        value: function() {
                            this.setState({
                                isVisible: !0
                            })
                        }
                    }, {
                        key: "MakeHidden",
                        value: function() {
                            this.setState({
                                isVisible: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(Se.jsx)("div", {
                                className: "RubicWidget" + (this.state.isVisible ? "" : " Hidden"),
                                children: Object(Se.jsx)("div", {
                                    id: "rubic-widget-root"
                                })
                            })
                        }
                    }]), n
                }(r.a.Component)),
                Pn = n(123),
                Dn = ["handleAxis"],
                In = r.a.forwardRef((function(e, t) {
                    var n = e.handleAxis,
                        a = Object(Pn.a)(e, Dn);
                    return Object(Se.jsx)("div", Object(o.a)(Object(o.a)({
                        className: "custom-resize-handle-component centered",
                        ref: t
                    }, a), {}, {
                        children: Object(Se.jsx)("div", {
                            className: "custom-handle custom-handle-".concat(n, " centered noselect"),
                            children: Object(Se.jsx)(Jt, {
                                className: "chevron"
                            })
                        })
                    }))
                })),
                Mn = ["title", "titleId"];

            function Rn() {
                return Rn = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, Rn.apply(this, arguments)
            }

            function An(e, t) {
                if (null == e) return {};
                var n, a, r = function(e, t) {
                    if (null == e) return {};
                    var n, a, r = {},
                        s = Object.keys(e);
                    for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function En(e, t) {
                var n = e.title,
                    r = e.titleId,
                    s = An(e, Mn);
                return a.createElement("svg", Rn({
                    width: "112.2mm",
                    height: "112.17mm",
                    viewBox: "0 0 112.2 112.17",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, gn || (gn = a.createElement("g", {
                    transform: "translate(-37.178 -44.533)"
                }, a.createElement("path", {
                    d: "m57.032 156.42c-4.7377-0.67125-9.0572-2.9274-12.832-6.7025-3.8863-3.8863-6.0393-8.1034-6.73-13.182-0.38902-2.8606-0.38902-68.936 0-71.796 0.69067-5.0787 2.8437-9.2958 6.73-13.182 3.8863-3.8863 8.1034-6.0393 13.182-6.73 2.8606-0.38902 68.936-0.38902 71.796 0 5.0787 0.69067 9.2958 2.8437 13.182 6.73 3.8863 3.8863 6.0393 8.1034 6.73 13.182 0.38901 2.8606 0.38901 68.936 0 71.796-0.69067 5.0787-2.8437 9.2958-6.73 13.182-3.8863 3.8863-8.1034 6.0393-13.182 6.73-2.6055 0.35433-69.631 0.32877-72.146-0.0275zm73.43-4.9849c3.6318-0.92887 5.7531-2.1653 8.6016-5.0138s4.0849-4.9697 5.0138-8.6016c0.51895-2.0291 0.53134-2.8958 0.53134-37.182 0-34.287-0.0124-35.153-0.53134-37.182-0.92887-3.6318-2.1653-5.7531-5.0138-8.6016s-4.9697-4.085-8.6016-5.0138c-2.0291-0.51895-2.8958-0.53133-37.182-0.53133-34.287 0-35.153 0.01239-37.182 0.53133-3.6318 0.92887-5.7531 2.1653-8.6016 5.0138s-4.085 4.9697-5.0138 8.6016c-0.51895 2.0291-0.53133 2.8958-0.53133 37.182 0 34.287 0.01238 35.153 0.53133 37.182 0.92887 3.6318 2.1653 5.7531 5.0138 8.6016 2.8169 2.8169 4.9509 4.0729 8.4982 5.0018 1.8961 0.4965 3.1797 0.51476 37.177 0.52883 34.42 0.0142 35.26 3e-3 37.291-0.51677zm-68.75-13.889c-4.9435-1.359-9.0647-5.6977-10.114-10.647-0.31553-1.489-0.37963-6.679-0.38346-31.048-0.0044-28.33 0.0121-29.326 0.5207-31.314 1.2643-4.9433 4.7941-8.5394 9.9258-10.112 1.5013-0.46008 3.2176-0.48649 31.618-0.48649 28.4 0 30.116 0.02641 31.618 0.48649 3.6729 1.1256 6.8504 3.5642 8.5526 6.564 0.46634 0.82181 1.0843 2.4184 1.3732 3.5481 0.5086 1.9886 0.52515 2.9838 0.5207 31.314-4e-3 24.369-0.0679 29.559-0.38346 31.048-1.0625 5.0138-5.1949 9.3199-10.23 10.66-2.0242 0.53877-61.055 0.52687-63.018-0.0127zm63.357-5.0669c2.158-1.0224 3.7579-2.5772 4.6833-4.551l0.70061-1.4944v-61.119l-0.89934-1.6585c-1.076-1.9843-2.4798-3.315-4.4929-4.2589l-1.487-0.69722h-60.59l-1.487 0.69722c-2.0131 0.94391-3.4169 2.2746-4.4929 4.2589l-0.89935 1.6585v61.119l0.70061 1.4944c1.2119 2.5849 3.8825 4.6854 6.6694 5.2454 0.60318 0.12122 14.313 0.20217 30.465 0.1799l29.369-0.0405z",
                    strokeWidth: .26458
                }))), kn || (kn = a.createElement("g", {
                    transform: "scale(1.0382 .96321)",
                    strokeWidth: .27469,
                    "aria-label": "C"
                }, a.createElement("path", {
                    d: "m71.43 78.195q-3.6096 1.4521-7.0117 2.1575-3.3607 0.70532-7.0117 0.70532-5.85 0-10.372-1.7011-4.4809-1.7426-7.5926-5.1447-3.0702-3.4021-4.6883-8.4224-1.5766-5.0617-1.5766-11.742 0-6.8458 1.7426-12.156 1.7426-5.3522 4.9788-9.0032 3.2362-3.6926 7.8415-5.6011 4.6468-1.95 10.414-1.95 1.867 0 3.4851 0.08298 1.6596 0.08298 3.2362 0.33192 1.5766 0.20745 3.1947 0.58086 1.6181 0.37341 3.3607 0.95426v10.123q-3.5266-1.6596-6.7213-2.3649t-5.8085-0.70532q-3.8585 0-6.5968 1.4106-2.7383 1.3692-4.5224 3.9-1.7426 2.4894-2.5724 5.9745-0.82979 3.4436-0.82979 7.5926 0 4.3979 0.82979 7.883 0.87128 3.4436 2.6553 5.85 1.7841 2.4064 4.5639 3.6926 2.7798 1.2447 6.5968 1.2447 1.3692 0 2.9458-0.24894 1.6181-0.29043 3.2362-0.70532 1.6596-0.45638 3.2362-1.0372 1.6181-0.62234 2.9873-1.2447z"
                }))))
            }
            var Fn, Ln, Wn, Hn, Un, zn, Gn = a.forwardRef(En),
                Vn = (n.p, ["title", "titleId"]);

            function Yn() {
                return Yn = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }, Yn.apply(this, arguments)
            }

            function Qn(e, t) {
                if (null == e) return {};
                var n, a, r = function(e, t) {
                    if (null == e) return {};
                    var n, a, r = {},
                        s = Object.keys(e);
                    for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function Kn(e, t) {
                var n = e.title,
                    r = e.titleId,
                    s = Qn(e, Vn);
                return a.createElement("svg", Yn({
                    viewBox: "0 0 291 357",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": r
                }, s), n ? a.createElement("title", {
                    id: r
                }, n) : null, Fn || (Fn = a.createElement("path", {
                    d: "m45.668 354.59-17.83-26.867h-11.158v26.867h-16.68v-84.504h25.652c10.506 0 18.635 2.564 24.387 7.693 5.828 5.052 8.742 11.979 8.742 20.781 0 5.205-1.112 10.104-3.336 14.697-2.147 4.516-5.483 8.075-10.007 10.677l19.67 30.656zm-28.988-42.941h11.848c4.524 0 7.822-1.301 9.893-3.904 2.07-2.679 3.106-5.549 3.106-8.611 0-3.061-0.882-5.97-2.646-8.726-1.764-2.832-5.177-4.248-10.238-4.248h-11.963z",
                    fill: "#4aa956"
                })), Ln || (Ln = a.createElement("path", {
                    d: "m126.83 304.42v50.174h-14.609l-1.15-8.037c-1.764 3.215-4.257 5.779-7.477 7.692-3.145 1.837-6.864 2.756-11.159 2.756-4.601 0-8.435-1.416-11.503-4.248-3.067-2.832-4.639-6.43-4.716-10.793v-37.544h16.104v31.574c0.231 4.899 2.493 7.348 6.787 7.348 3.528 0 6.327-1.722 8.398-5.167 2.147-3.444 3.221-7.884 3.221-13.318v-20.437z",
                    fill: "#4aa956"
                })), Wn || (Wn = a.createElement("path", {
                    d: "m178.59 301.89c4.371 0 8.359 1.071 11.963 3.215 3.681 2.066 6.595 5.09 8.742 9.07 2.148 3.98 3.221 8.726 3.221 14.237s-1.189 10.372-3.566 14.582c-2.377 4.133-5.56 7.348-9.547 9.644-3.988 2.22-8.321 3.33-12.999 3.33-6.825 0-12.462-2.144-16.91-6.43v5.052h-16.104v-90.589h15.989v43.859c2.147-1.76 4.87-3.176 8.167-4.248 3.298-1.148 6.979-1.722 11.044-1.722zm-5.752 40.53c2.377 0 4.563-0.613 6.557-1.838 2.07-1.224 3.719-2.908 4.946-5.051 1.227-2.22 1.841-4.631 1.841-7.234 0-3.98-1.304-7.271-3.911-9.874-2.608-2.602-5.752-3.903-9.433-3.903-3.144 0-5.905 0.727-8.282 2.181-2.378 1.454-4.065 3.406-5.062 5.856v12.285c2.761 5.052 7.209 7.578 13.344 7.578z",
                    fill: "#4aa956"
                })), Hn || (Hn = a.createElement("path", {
                    d: "m231.28 304.42v50.174h-16.105v-50.174zm-16.45-17.796c0-2.297 0.882-4.21 2.646-5.741 1.841-1.608 3.911-2.411 6.212-2.411 2.224 0 4.218 0.803 5.981 2.411 1.764 1.531 2.646 3.444 2.646 5.741 0 2.296-0.882 4.209-2.646 5.74-1.763 1.531-3.757 2.297-5.981 2.297-2.301 0-4.371-0.766-6.212-2.297-1.764-1.531-2.646-3.444-2.646-5.74z",
                    fill: "#4aa956"
                })), Un || (Un = a.createElement("path", {
                    d: "m290.54 350.11c-2.224 1.761-5.023 3.177-8.397 4.248-3.298 1.072-6.557 1.608-9.778 1.608-8.743 0-15.683-2.335-20.821-7.004-5.061-4.746-7.592-11.252-7.592-19.519 0-5.358 1.227-10.027 3.681-14.007 2.531-4.057 5.828-7.118 9.893-9.185 4.064-2.143 8.435-3.215 13.113-3.215 8.359 0 15.146 2.22 20.361 6.659l-7.822 10.334c-3.298-2.603-6.979-3.904-11.043-3.904-3.374 0-6.25 1.263-8.628 3.789-2.3 2.526-3.451 5.702-3.451 9.529 0 3.828 1.266 7.042 3.797 9.645 2.53 2.526 5.828 3.789 9.892 3.789 3.528 0 6.442-0.957 8.743-2.871z",
                    fill: "#4aa956"
                })), zn || (zn = a.createElement("path", {
                    d: "m251 62.157-106.72-62.157-104.06 61.039-0.221 122.97 104.95 62.157 106.05-60.815zm-106.5-43.376 78.82 46.059-78.378 46.058-78.82-46.058zm-9.078 201.9-79.263-45.835v-91.67l79.042 46.059v91.446zm20.369-90.105 79.042-46.058v91.446l-79.042 46.282z",
                    fill: "#4aa956"
                })))
            }
            var qn = a.forwardRef(Kn);
            n.p, n(872);

            function Jn(e) {
                var t = Object(a.useContext)(ye),
                    n = Object(a.useRef)(null),
                    r = at("chartShown"),
                    s = Object(u.a)(r, 2),
                    i = s[0],
                    o = s[1],
                    l = Object(a.useState)(!1),
                    d = Object(u.a)(l, 2),
                    p = d[0],
                    b = d[1],
                    m = Object(a.useState)(!1),
                    h = Object(u.a)(m, 2),
                    f = h[0],
                    j = h[1];
                nt(["c"], v), nt(["Escape"], (function() {
                    o(!1), b(!1)
                })), Object(a.useEffect)((function() {
                    p ? n.current.MakeVisible() : n.current.MakeHidden()
                }), [p]);
                var y = Object(a.useMemo)((function() {
                        return Object(Se.jsx)(Nn.a, {
                            symbol: "BINANCE:" + t.tickerSymbol + "USDT",
                            theme: Tn.Themes.DARK,
                            interval: "5",
                            locale: "en",
                            autosize: !0
                        })
                    }), [t]),
                    x = Object(a.useMemo)((function() {
                        return Object(Se.jsx)(In, {
                            handleAxis: ["n"],
                            onPointerDown: w,
                            onPointerUp: g
                        })
                    }), []);

                function v() {
                    o(!i)
                }

                function O() {
                    b(!p)
                }

                function w() {
                    j(!0)
                }

                function g() {
                    j(!1)
                }

                function k() {
                    return Object(Se.jsxs)("button", {
                        id: "Chart",
                        onClick: v,
                        children: [Object(Se.jsx)(Gn, {
                            className: "ShortcutHint"
                        }), "Chart"]
                    })
                }

                function B() {
                    return Object(Se.jsxs)("button", {
                        id: "RubicWidget",
                        onClick: O,
                        children: [Object(Se.jsx)(qn, {
                            className: "ShortcutHint"
                        }), "Exchange"]
                    })
                }

                function T() {
                    return Object(Se.jsx)(c.b, {
                        to: "referrals",
                        children: Object(Se.jsx)("button", {
                            id: "Referrals",
                            children: "Referrals"
                        })
                    })
                }
                return Object(Se.jsxs)("div", {
                    className: "MiscWidgets",
                    children: [Object(Se.jsx)(Sn.ResizableBox, {
                        className: "CustomResizableBox Chart" + (i ? "" : " Hidden") + (f ? " NoPointerEvents" : ""),
                        height: Math.round(window.innerHeight / 100 * 40),
                        width: window.innerWidth,
                        resizeHandles: ["n"],
                        axis: "y",
                        handle: x,
                        children: y
                    }), Object(Se.jsx)(Cn, {
                        ref: n
                    }), Object(Se.jsxs)("div", {
                        className: "Buttons",
                        children: [Object(Se.jsx)(T, {}), Object(Se.jsx)(k, {}), Object(Se.jsx)(B, {})]
                    })]
                })
            }
            var Xn = r.a.memo(Jn);
            n(873);

            function Zn(e) {
                var t = Object(a.useContext)(ye),
                    n = Object(a.useContext)(je),
                    r = n.web3Data;
                n.SetWeb3Data;
                return Object(Se.jsxs)("div", {
                    className: "HomePrediction",
                    children: [Object(Se.jsxs)("div", {
                        className: "PredictionContent",
                        children: [Object(Se.jsx)(Bn, {}), Object(Se.jsxs)("div", {
                            className: "Cards",
                            children: [Object(Se.jsx)(bn, {
                                roundID: e.newestRoundID - 2,
                                address: r.address,
                                contract: t.contract,
                                decimalPlaces: t.decimalPlaces
                            }, e.newestRoundID - 2), Object(Se.jsx)(Rt, {
                                roundID: e.newestRoundID - 1,
                                contract: t.contract,
                                address: r.address,
                                decimalPlaces: t.decimalPlaces,
                                markedLoaded: e.isLoaded,
                                OnLoad: e.OnLoad
                            }, e.newestRoundID - 1), Object(Se.jsx)(an, {
                                roundID: e.newestRoundID,
                                web3: r.web3,
                                address: r.address,
                                contract: t.contract,
                                contractReferrals: t.contractReferrals,
                                decimalPlaces: t.decimalPlaces,
                                tickerSymbol: t.tickerSymbol,
                                currencyImage: t.logo
                            }, e.newestRoundID), Object(Se.jsx)(jn, {
                                lastEndedRoundID: e.newestRoundID - 2,
                                contract: t.contract
                            })]
                        }), Object(Se.jsx)(Xn, {})]
                    }), Object(Se.jsx)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    })]
                })
            }
            var _n = r.a.memo(Zn),
                $n = n(410),
                ea = n(125),
                ta = n(51);
            n(874), n(875);
            ta.e.use([ta.c, ta.b, ta.a, ta.d]);
            var na = function(e) {
                var t = Object(a.useContext)(je),
                    n = t.web3Data,
                    r = (t.SetWeb3Data, Object(a.useContext)(ye)),
                    s = Object(a.useContext)(ve);
                return Object(Se.jsx)("div", {
                    className: "HomeMain",
                    style: {
                        flexDirection: "row"
                    },
                    children: Object(Se.jsx)("div", {
                        className: "PredictionContent" + (s ? " PredictionMobile" : ""),
                        children: Object(Se.jsx)("div", {
                            style: {
                                width: "100vw",
                                height: "auto"
                            },
                            children: Object(Se.jsxs)($n.a, {
                                init: !0,
                                effect: "coverflow",
                                mousewheel: !0,
                                keyboard: {
                                    enabled: !0
                                },
                                grabCursor: !0,
                                centeredSlides: !0,
                                centerInsufficientSlides: !0,
                                slidesPerView: "auto",
                                coverflowEffect: {
                                    rotate: 30,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 2,
                                    slideShadows: !1
                                },
                                pagination: !0,
                                className: "MainSwiper",
                                initialSlide: 2,
                                noSwipingSelector: "input, .ChevronButton",
                                resistance: !0,
                                roundLengths: !0,
                                speed: 100,
                                style: {
                                    display: "flex",
                                    placeItems: "center",
                                    placeContent: "center"
                                },
                                children: [Object(Se.jsx)(ea.a, {
                                    className: "BaseSlide",
                                    children: Object(Se.jsx)(bn, {
                                        roundID: e.newestRoundID - 2,
                                        address: n.address,
                                        contract: r.contract,
                                        decimalPlaces: r.decimalPlaces
                                    }, e.newestRoundID - 2)
                                }), Object(Se.jsx)(ea.a, {
                                    className: "BaseSlide",
                                    children: Object(Se.jsx)(Rt, {
                                        roundID: e.newestRoundID - 1,
                                        contract: r.contract,
                                        address: n.address,
                                        decimalPlaces: r.decimalPlaces,
                                        markedLoaded: e.isLoaded,
                                        OnLoad: e.OnLoad
                                    }, e.newestRoundID - 1)
                                }), Object(Se.jsx)(ea.a, {
                                    className: "BaseSlide",
                                    children: Object(Se.jsx)(an, {
                                        roundID: e.newestRoundID,
                                        web3: n.web3,
                                        address: n.address,
                                        contract: r.contract,
                                        contractReferrals: r.contractReferrals,
                                        decimalPlaces: r.decimalPlaces,
                                        tickerSymbol: r.tickerSymbol,
                                        currencyImage: r.logo
                                    }, e.newestRoundID)
                                }), Object(Se.jsx)(ea.a, {
                                    className: "BaseSlide Chart",
                                    children: Object(Se.jsx)("div", {
                                        className: "ChartContainerForSwiper",
                                        children: Object(Se.jsx)(Nn.a, {
                                            symbol: "BINANCE:" + r.tickerSymbol + "USDT",
                                            theme: Tn.Themes.DARK,
                                            interval: "5",
                                            locale: "en",
                                            autosize: !0
                                        })
                                    })
                                }), Object(Se.jsx)(ea.a, {
                                    className: "BaseSlide",
                                    children: Object(Se.jsx)(jn, {
                                        lastEndedRoundID: e.newestRoundID - 2,
                                        contract: r.contract
                                    })
                                })]
                            })
                        })
                    })
                })
            };
            var aa = function(e) {
                var t = Object(a.useContext)(ye),
                    n = Object(a.useState)(!1),
                    r = Object(u.a)(n, 2),
                    s = r[0],
                    i = r[1],
                    c = Object(a.useState)(0),
                    o = Object(u.a)(c, 2),
                    l = o[0],
                    d = o[1];

                function p() {
                    return b.apply(this, arguments)
                }

                function b() {
                    return (b = Object(x.a)(O.a.mark((function n() {
                        var a, r;
                        return O.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, t.contract.rpc.methods.Rounds(e.newestRoundID).call();
                                case 2:
                                    return a = n.sent, n.next = 5, t.contract.rpc.methods.IsPaused().call();
                                case 5:
                                    return r = n.sent, e.SetPaused(r), e.SetScheduledPause(m(a)), e.SetStuck(h(a)), n.t0 = d, n.next = 12, f();
                                case 12:
                                    n.t1 = n.sent, (0, n.t0)(n.t1);
                                case 14:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))).apply(this, arguments)
                }

                function m(e) {
                    if (!e) throw new SyntaxError("missing required argument: round");
                    return !!e.canceled
                }

                function h(e) {
                    if (!e) throw new SyntaxError("missing required argument: round");
                    var t = (Date.now() / 1e3).toFixed(0);
                    return e.closeTimestamp + 60 < t
                }

                function f() {
                    return j.apply(this, arguments)
                }

                function j() {
                    return (j = Object(x.a)(O.a.mark((function e() {
                        var n, a;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.contract.rpc.methods.currentBlockTimestamp().call();
                                case 2:
                                    return e.t0 = e.sent, n = 1e3 * e.t0, a = ((n - Date.now()) / 1e3).toFixed(0), e.abrupt("return", Math.abs(a));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                return Object(a.useEffect)((function() {
                    p();
                    var e = setInterval(p, 5e3);
                    return function() {
                        clearInterval(e)
                    }
                }), [e.newestRoundID, e.isPaused, e.isStuck, e.isScheduledPause]), Object(a.useEffect)((function() {
                    i(l > 45 && (console.warn("Severe clock skew detected(behind by " + l + " secs); adjust your computer's time"), !0))
                }), [l]), Object(Se.jsx)("div", {
                    style: {
                        fontSize: "3.4em"
                    },
                    children: e.isPaused ? Object(Se.jsx)("p", {
                        children: "Predictions paused."
                    }) : e.isStuck ? s ? Object(Se.jsxs)("div", {
                        style: {
                            fontSize: "0.4em"
                        },
                        children: [Object(Se.jsxs)("p", {
                            children: ["Your clock is behind by ", l, " seconds;"]
                        }), Object(Se.jsx)("p", {
                            children: "Either your computer's time is wrong, or BSC is overloaded"
                        }), Object(Se.jsx)("p", {
                            children: "If this warning persists, please reach out to us in our Telegram group"
                        })]
                    }) : Object(Se.jsx)("p", {
                        style: {
                            fontSize: "1em"
                        },
                        children: "Predictions paused due to technical difficulties"
                    }) : null
                })
            };
            var ra = ot((function(e) {
                    var t = Object(a.useContext)(ye),
                        n = Object(a.useContext)(ve),
                        s = Object(a.useState)(0),
                        i = Object(u.a)(s, 2),
                        c = i[0],
                        o = i[1],
                        l = Object(a.useState)(!1),
                        d = Object(u.a)(l, 2),
                        p = d[0],
                        b = d[1],
                        m = Object(a.useState)(!1),
                        h = Object(u.a)(m, 2),
                        f = h[0],
                        j = h[1],
                        y = Object(a.useState)(!1),
                        v = Object(u.a)(y, 2),
                        w = v[0],
                        g = v[1],
                        k = Object(a.useMemo)((function() {
                            return p || w ? null : Object(Se.jsx)(r.a.Fragment, {
                                children: n ? Object(Se.jsx)(na, {
                                    newestRoundID: c
                                }) : Object(Se.jsx)(_n, {
                                    newestRoundID: c
                                })
                            })
                        }), [p, w, n, c]);

                    function B() {
                        return T.apply(this, arguments)
                    }

                    function T() {
                        return (T = Object(x.a)(O.a.mark((function e() {
                            var n;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = Number, e.next = 3, t.contract.rpc.methods.currentEpoch().call();
                                    case 3:
                                        e.t1 = e.sent, (n = (0, e.t0)(e.t1)) !== c && o(n);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    return Object(a.useEffect)((function() {
                        B()
                    }), []), Object(a.useEffect)((function() {
                        var e = setInterval(B, 2500);
                        return function() {
                            clearInterval(e)
                        }
                    }), [c]), c ? Object(Se.jsxs)(r.a.Fragment, {
                        children: [Object(Se.jsx)(aa, {
                            newestRoundID: c,
                            isPaused: p,
                            isScheduledPause: f,
                            isStuck: w,
                            SetPaused: b,
                            SetScheduledPause: j,
                            SetStuck: g
                        }), k, Object(Se.jsx)(ut, {})]
                    }) : null
                })),
                sa = ra,
                ia = n(408),
                ca = n.p + "static/media/BullIcon-11.c8ea7d0b.svg",
                oa = n.p + "static/media/BearIcon-10.e3c43810.svg";
            n(173);
            var ua = function(e) {
                var t = Object(a.useState)(!1),
                    n = Object(u.a)(t, 2),
                    s = n[0],
                    i = n[1],
                    c = Object(a.useState)(!1),
                    o = Object(u.a)(c, 2),
                    l = o[0],
                    d = o[1],
                    p = Object(a.useState)(null),
                    b = Object(u.a)(p, 2),
                    m = b[0],
                    h = b[1];

                function f() {
                    return !e.address || !e.roundID
                }

                function j() {
                    return y.apply(this, arguments)
                }

                function y() {
                    return (y = Object(x.a)(O.a.mark((function t() {
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!f()) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.t0 = d, t.next = 5, e.contract.methods.Refundable(e.roundID, e.address).call();
                                case 5:
                                    return t.t1 = t.sent, (0, t.t0)(t.t1), t.t2 = i, t.next = 10, e.contract.methods.Claimable(e.roundID, e.address).call();
                                case 10:
                                    t.t3 = t.sent, (0, t.t2)(t.t3);
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function v() {
                    return w.apply(this, arguments)
                }

                function w() {
                    return (w = Object(x.a)(O.a.mark((function t() {
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!f()) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.t0 = h, t.next = 5, e.contract.methods.Rounds(e.roundID).call();
                                case 5:
                                    t.t1 = t.sent, (0, t.t0)(t.t1);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function g() {
                    return k.apply(this, arguments)
                }

                function k() {
                    return (k = Object(x.a)(O.a.mark((function t() {
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!f()) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    Et(e.contract.methods.user_Claim([e.roundID]).send({
                                        from: e.address
                                    }));
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function B() {
                    return Object(Se.jsxs)("h5", {
                        className: "roundNumber",
                        children: ["Round #", e.roundID, " "]
                    })
                }

                function T() {
                    if (!e.betAmount) return "unknown amount";
                    var t = Number.parseFloat(e.web3.utils.fromWei(e.betAmount, "Ether")).toFixed(4) + " BNB";
                    return Object(Se.jsxs)("p", {
                        className: "wagered",
                        children: [t, Object(Se.jsx)("img", {
                            className: "bnbCur",
                            src: vt,
                            alt: "bnbcurrency"
                        })]
                    })
                }

                function N() {
                    var t;
                    if (e.claimed) t = "already claimed";
                    else if (m && e.betAmount && m.rewardBaseCalAmount)
                        if (s) {
                            var n = m && m.rewardBaseCalAmount ? (Number(m.bullAmount) + Number(m.bearAmount)) / m.rewardBaseCalAmount : 0;
                            t = "returns ~" + ne(e.betAmount * n).toFixed(4) + " BNB at " + n.toFixed(2) + "x rate"
                        } else if (l) {
                        t = "refund ~" + ne(e.betAmount).toFixed(4) + " BNB at " + 1..toFixed(2) + "x rate"
                    } else t = "nothing to do here";
                    else t = "loading details...";
                    return Object(Se.jsx)("p", {
                        className: "rewardStatistic",
                        children: t
                    })
                }

                function S() {
                    var t;
                    return t = e.claimed ? null : s ? Object(Se.jsx)("button", {
                        onClick: g,
                        children: "Claim"
                    }) : l ? Object(Se.jsx)("button", {
                        onClick: g,
                        children: "Refund"
                    }) : null, Object(Se.jsx)("div", {
                        className: "roundClaim",
                        children: t
                    })
                }
                return Object(a.useEffect)((function() {
                    var e = setTimeout(Object(x.a)(O.a.mark((function e() {
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        v(), j();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 100),
                        t = setInterval(Object(x.a)(O.a.mark((function e() {
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        v(), j();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 3e3);
                    return function() {
                        clearInterval(t), clearTimeout(e)
                    }
                }), [e.roundID, s, l, m]), Object(Se.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "center",
                        marginBottom: "0.3em"
                    },
                    children: [Object(Se.jsxs)("div", {
                        className: "round",
                        children: [Object(Se.jsx)(B, {}), Object(Se.jsxs)("div", {
                            className: "roundRow",
                            children: [Object(Se.jsx)(T, {}), Object(Se.jsx)("p", {
                                className: "betPosition",
                                children: function() {
                                    var t = "unknown";
                                    return t = e.position == M.bear ? Object(Se.jsxs)(r.a.Fragment, {
                                        children: ["on", Object(Se.jsx)("img", {
                                            src: oa,
                                            alt: "bearicon"
                                        }), "BEAR"]
                                    }) : e.position == M.bull ? Object(Se.jsxs)(r.a.Fragment, {
                                        children: ["on", Object(Se.jsx)("img", {
                                            src: ca,
                                            alt: "bullicon"
                                        }), "BULL"]
                                    }) : "unknown", Object(Se.jsx)("div", {
                                        className: "chosenPosition",
                                        children: t
                                    })
                                }()
                            }), Object(Se.jsx)(N, {})]
                        })]
                    }), Object(Se.jsx)(S, {})]
                })
            };
            var la = function(e) {
                var t = Object(a.useState)(!1),
                    n = Object(u.a)(t, 2),
                    s = n[0],
                    i = n[1],
                    c = Object(a.useState)(!1),
                    o = Object(u.a)(c, 2),
                    l = o[0],
                    d = o[1],
                    p = Object(a.useState)(null),
                    b = Object(u.a)(p, 2),
                    m = b[0],
                    h = b[1];

                function f() {
                    return !e.address || !e.roundID
                }

                function j() {
                    return y.apply(this, arguments)
                }

                function y() {
                    return (y = Object(x.a)(O.a.mark((function t() {
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!f()) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.t0 = d, t.next = 5, e.contract.methods.Refundable(e.roundID, e.address).call();
                                case 5:
                                    return t.t1 = t.sent, (0, t.t0)(t.t1), t.t2 = i, t.next = 10, e.contract.methods.Claimable(e.roundID, e.address).call();
                                case 10:
                                    t.t3 = t.sent, (0, t.t2)(t.t3);
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function v() {
                    return w.apply(this, arguments)
                }

                function w() {
                    return (w = Object(x.a)(O.a.mark((function t() {
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!f()) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.t0 = h, t.next = 5, e.contract.methods.Rounds(e.roundID).call();
                                case 5:
                                    t.t1 = t.sent, (0, t.t0)(t.t1);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function g() {
                    return k.apply(this, arguments)
                }

                function k() {
                    return (k = Object(x.a)(O.a.mark((function t() {
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!f()) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    Et(e.contract.methods.user_Claim([e.roundID]).send({
                                        from: e.address
                                    }));
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function B() {
                    return Object(Se.jsxs)("h5", {
                        className: "roundNumberMobile",
                        children: ["#", e.roundID, " "]
                    })
                }

                function T() {
                    if (!e.betAmount) return "unknown amount";
                    var t = Number.parseFloat(e.web3.utils.fromWei(e.betAmount, "Ether")).toFixed(4);
                    return Object(Se.jsxs)("p", {
                        className: "wageredMobile",
                        children: [t, Object(Se.jsx)("img", {
                            className: "bnbCur",
                            src: vt,
                            alt: "bnbcurrency"
                        })]
                    })
                }

                function N() {
                    var t;
                    if (e.claimed) t = "already claimed";
                    else if (m && e.betAmount && m.rewardBaseCalAmount)
                        if (s) {
                            var n = m && m.rewardBaseCalAmount ? (Number(m.bullAmount) + Number(m.bearAmount)) / m.rewardBaseCalAmount : 0;
                            t = "returns ~" + ne(e.betAmount * n).toFixed(4) + " BNB at " + n.toFixed(2) + "x rate"
                        } else if (l) {
                        t = "refund ~" + ne(e.betAmount).toFixed(4) + " BNB at " + 1..toFixed(2) + "x rate"
                    } else t = "nothing to do here";
                    else t = "loading details...";
                    return Object(Se.jsx)("p", {
                        className: "rewardStatisticMobile",
                        children: t
                    })
                }

                function S() {
                    var t;
                    return t = e.claimed ? null : s ? Object(Se.jsx)("button", {
                        onClick: g,
                        children: "Claim"
                    }) : l ? Object(Se.jsx)("button", {
                        onClick: g,
                        children: "Refund"
                    }) : null, Object(Se.jsx)("div", {
                        className: "roundClaim",
                        children: t
                    })
                }
                return Object(a.useEffect)((function() {
                    var e = setTimeout(Object(x.a)(O.a.mark((function e() {
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        v(), j();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 100),
                        t = setInterval(Object(x.a)(O.a.mark((function e() {
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        v(), j();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 3e3);
                    return function() {
                        clearInterval(t), clearTimeout(e)
                    }
                }), [e.roundID, s, l, m]), Object(Se.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "center",
                        marginBottom: "0.3em"
                    },
                    children: [Object(Se.jsxs)("div", {
                        className: "roundMobile",
                        children: [Object(Se.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                borderRight: "1px solid gray",
                                maxWidth: "30%"
                            },
                            children: [Object(Se.jsx)(B, {}), Object(Se.jsx)(T, {})]
                        }), Object(Se.jsxs)("div", {
                            className: "roundRow",
                            children: [Object(Se.jsx)("p", {
                                className: "betPosition",
                                children: function() {
                                    var t = "unknown";
                                    return t = e.position == M.bear ? Object(Se.jsxs)(r.a.Fragment, {
                                        children: [Object(Se.jsx)("img", {
                                            src: oa,
                                            alt: "bearicon"
                                        }), "BEAR"]
                                    }) : e.position == M.bull ? Object(Se.jsxs)(r.a.Fragment, {
                                        children: [Object(Se.jsx)("img", {
                                            src: ca,
                                            alt: "bullicon"
                                        }), "BULL"]
                                    }) : "unknown", Object(Se.jsx)("div", {
                                        className: "chosenPositionMobile",
                                        children: t
                                    })
                                }()
                            }), Object(Se.jsx)(N, {})]
                        })]
                    }), Object(Se.jsx)(S, {})]
                })
            };
            var da = function(e) {
                var t, n = Object(a.useContext)(ve);
                t = n ? la : ua;
                var r = Object(a.useState)(null),
                    s = Object(u.a)(r, 2),
                    i = s[0],
                    c = s[1];

                function o() {
                    return l.apply(this, arguments)
                }

                function l() {
                    return (l = Object(x.a)(O.a.mark((function t() {
                        var n, a;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e.address && e.contract && e.totalHistoryLength) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.next = 4, e.contract.methods.GetUserRounds(e.address, e.start, e.length).call();
                                case 4:
                                    n = t.sent, a = n[0][e.length - 1], i ? i[0][e.length - 1] !== a && c(n) : c(n);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                return Object(a.useEffect)((function() {
                        var e = setTimeout(o, 100),
                            t = setInterval(o, 1e4);
                        return function() {
                            clearTimeout(e), clearInterval(t)
                        }
                    }), [e.address, e.totalHistoryLength, e.number, i]),
                    function() {
                        var n = [],
                            a = function() {
                                if (!e.address || !i) return [];
                                for (var t = i[0], n = i[1], a = [], r = 0; r < n.length; r++) {
                                    var s = {
                                        roundID: t[r],
                                        claimed: n[r].claimed,
                                        position: n[r].position,
                                        amount: n[r].amount
                                    };
                                    a.push(s)
                                }
                                return a
                            }().reverse();
                        if (-1 != a.length && i) {
                            var r, s = Object(ia.a)(a);
                            try {
                                for (s.s(); !(r = s.n()).done;) {
                                    var c = r.value;
                                    n.push(Object(Se.jsx)(t, {
                                        roundID: c.roundID,
                                        position: c.position,
                                        betAmount: c.amount,
                                        claimed: c.claimed,
                                        web3: e.web3,
                                        address: e.address,
                                        contract: e.contract
                                    }, c.roundID))
                                }
                            } catch (o) {
                                s.e(o)
                            } finally {
                                s.f()
                            }
                        } else n = Object(Se.jsx)("h1", {
                            children: "Loading..."
                        });
                        return n
                    }()
            };
            var pa = function(e) {
                var t = Object(a.useContext)(xe),
                    n = t.historySettings,
                    r = t.SetHistorySettings,
                    s = Object(a.useContext)(ve);

                function i() {
                    return l.apply(this, arguments)
                }

                function l() {
                    return (l = Object(x.a)(O.a.mark((function t() {
                        var a;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e.address && e.contract.user) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.next = 4, e.contract.user.methods.GetUserRoundsLength(e.address).call();
                                case 4:
                                    (a = t.sent) != n.totalLength && r(Object(o.a)(Object(o.a)({}, n), {}, {
                                        totalLength: a
                                    }));
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function d() {
                    var e = Math.ceil(n.totalLength / n.entriesPerPage);
                    return e || 1
                }

                function p() {
                    return d() * n.entriesPerPage - n.totalLength
                }
                return Object(a.useEffect)((function() {
                    var e = setInterval(Object(x.a)(O.a.mark((function e() {
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    i();
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), 1e3);
                    return function() {
                        clearInterval(e)
                    }
                }), [e.address, n.totalLength]), Object(a.useEffect)((function() {
                    -1 !== n.totalLength && e.OnLoad()
                }), [n.totalLength]), e.address ? -1 == n.totalLength ? Object(Se.jsx)("div", {
                    children: Object(Se.jsx)("h1", {
                        children: "Loading pages..."
                    })
                }) : 0 == n.totalLength ? Object(Se.jsxs)("div", {
                    children: [Object(Se.jsx)("h1", {
                        children: "Your history is empty!"
                    }), Object(Se.jsx)("h1", {
                        children: Object(Se.jsx)(c.c, {
                            to: "",
                            children: "Make some bets"
                        })
                    })]
                }) : Object(Se.jsx)("div", {
                    className: "history" + (s ? " mobile" : ""),
                    children: function() {
                        var t = function(e) {
                                if (!e) throw new SyntaxError("missing required argumen: pageNumber");
                                var t, a, r = d() + 1 - e,
                                    s = 1 === r,
                                    i = 0 !== p();
                                return n.totalLength < n.entriesPerPage ? (t = 0, a = n.totalLength) : s && i ? (t = 0, a = n.entriesPerPage - p()) : (t = r * n.entriesPerPage - n.entriesPerPage - p(), a = n.entriesPerPage), [t, a]
                            }(n.currentPage),
                            a = Object(u.a)(t, 2),
                            r = a[0],
                            s = a[1];
                        return Object(Se.jsx)(da, {
                            number: n.currentPage,
                            start: r,
                            length: s,
                            size: n.entriesPerPage,
                            totalHistoryLength: n.totalLength,
                            web3: e.web3,
                            address: e.address,
                            contract: e.contract.user
                        }, n.currentPage)
                    }()
                }) : Object(Se.jsx)("div", {
                    className: "history" + (s ? " mobile" : ""),
                    children: Object(Se.jsx)("h1", {
                        children: "Please connect your wallet"
                    })
                })
            };
            var ba = function(e) {
                var t = Object(a.useContext)(xe),
                    n = t.historySettings,
                    r = t.SetHistorySettings,
                    s = Object(a.useContext)(ve);

                function i() {
                    var e = Math.ceil(n.totalLength / n.entriesPerPage);
                    return e || 1
                }

                function c(e) {
                    if (!e) throw new SyntaxError("missing required argument: pageNumber");
                    return e === n.currentPage ? " active-button" : ""
                }
                return 0 == n.totalLength || -1 == n.totalLength ? null : Object(Se.jsx)("div", {
                    className: "pagebuttons" + (s ? " mobile" : ""),
                    children: function() {
                        var e, t = [];
                        e = i() > n.maxPagesToShow ? n.maxPagesToShow : i();
                        for (var a = function(e) {
                                t.push(Object(Se.jsx)("div", {
                                    className: "noselect page-button" + c(e),
                                    onClick: function() {
                                        var t;
                                        (t = e) !== n.currentPage && r(Object(o.a)(Object(o.a)({}, n), {}, {
                                            currentPage: t
                                        }))
                                    },
                                    children: e
                                }, e))
                            }, s = 1; s <= e; s++) a(s);
                        return t
                    }()
                })
            };
            var ma = function(e) {
                if (void 0 === e.isLoaded) throw new SyntaxError("missing required property of LoadingScreen: isLoaded");
                return !1 === e.isLoaded ? Object(Se.jsx)("p", {
                    style: {
                        fontSize: "3.4em"
                    },
                    className: "glowing",
                    children: "Loading..."
                }) : null
            };
            n(393);
            var ha = function(e) {
                var t = Object(a.useState)(null),
                    n = Object(u.a)(t, 2),
                    s = n[0],
                    i = n[1],
                    c = Object(a.useState)(0),
                    o = Object(u.a)(c, 2),
                    l = o[0],
                    d = o[1],
                    p = Object(a.useState)(0),
                    b = Object(u.a)(p, 2),
                    m = b[0],
                    h = b[1],
                    f = Object(a.useState)(null),
                    j = Object(u.a)(f, 2),
                    y = j[0],
                    v = j[1];
                Object(a.useEffect)((function() {
                    ! function() {
                        g.apply(this, arguments)
                    }()
                }), [e.address, e.isActive]), Object(a.useEffect)((function() {
                    ! function() {
                        k.apply(this, arguments)
                    }()
                }), [s, e.address, e.isActive]);
                var w = Object(a.useMemo)((function() {
                    return function() {
                        var e = null;
                        e = null === y ? Object(Se.jsxs)("p", {
                            children: ["Loading... Processing round ", m, "/", s]
                        }) : 0 === y.length ? Object(Se.jsxs)(r.a.Fragment, {
                            children: [Object(Se.jsx)(P, {}), Object(Se.jsx)("p", {
                                children: "None of them can be claimed"
                            })]
                        }) : Object(Se.jsxs)(r.a.Fragment, {
                            children: [Object(Se.jsx)(P, {}), Object(Se.jsxs)("p", {
                                children: ["You can claim ", y.length, " of them"]
                            }), Object(Se.jsx)("button", {
                                className: "ClaimButton ClaimAllButton",
                                onClick: N,
                                children: "Claim!"
                            })]
                        });
                        return Object(Se.jsx)("div", {
                            className: "ClaimAllBody",
                            children: e
                        })
                    }()
                }), [y, s, l, m, e.address]);

                function g() {
                    return (g = Object(x.a)(O.a.mark((function t() {
                        var n, a;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e.address && e.isActive) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.t0 = Number, t.next = 5, e.contract.methods.GetUserRoundsLength(e.address).call();
                                case 5:
                                    t.t1 = t.sent, n = (0, t.t0)(t.t1), a = C(), n > a && (d(n - a), n = a), i(n);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function k() {
                    return (k = Object(x.a)(O.a.mark((function t() {
                        var n, a, r, i;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e.address && e.isActive && null !== s) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.next = 4, e.contract.methods.GetUserRounds(e.address, l, s).call();
                                case 4:
                                    if (n = t.sent, a = n[0], void 0 !== (r = n[1]) && void 0 !== r.length) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 9:
                                    return t.next = 11, B(r, a);
                                case 11:
                                    i = t.sent, v(i);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function B(e, t) {
                    return T.apply(this, arguments)
                }

                function T() {
                    return (T = Object(x.a)(O.a.mark((function t(n, a) {
                        var r, s, i, c, o;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n && a) {
                                        t.next = 2;
                                        break
                                    }
                                    throw new SyntaxError("missing required argument(s): history and/or roundNumbers");
                                case 2:
                                    r = [], s = 0, i = 0;
                                case 5:
                                    if (!(i < n.length)) {
                                        t.next = 21;
                                        break
                                    }
                                    if (n[i].claimed) {
                                        t.next = 17;
                                        break
                                    }
                                    return c = a[i], o = !1, t.next = 11, e.contract.methods.Claimable(c, e.address).call();
                                case 11:
                                    if (o = t.sent) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.next = 15, e.contract.methods.Refundable(c, e.address).call();
                                case 15:
                                    o = t.sent;
                                case 16:
                                    o && r.push(c);
                                case 17:
                                    i >= s + 5 && h(s = i);
                                case 18:
                                    i++, t.next = 5;
                                    break;
                                case 21:
                                    return t.abrupt("return", r);
                                case 22:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function N() {
                    return S.apply(this, arguments)
                }

                function S() {
                    return (S = Object(x.a)(O.a.mark((function t() {
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (y && !(y.length < 1)) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    Et(e.contract.methods.user_Claim(y).send({
                                        from: e.address
                                    }));
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }

                function C() {
                    var e = new URLSearchParams(window.location.search).get("claimall");
                    return (e = Number(e).toFixed(0)) > 288 ? e : 288
                }

                function P() {
                    return Object(Se.jsxs)("p", {
                        children: ["We checked the last ", s, " rounds that you bet on", l > 0 ? "; we also ignored ".concat(l, " older rounds.") : "."]
                    })
                }
                return Object(Se.jsxs)("div", {
                    children: [Object(Se.jsx)("div", {
                        className: "HistoryPageButton",
                        children: Object(Se.jsx)("button", {
                            onClick: e.ToggleActive,
                            children: "Claim All"
                        })
                    }), e.isActive ? w : null]
                })
            };
            var fa = ot((function(e) {
                var t = Object(a.useContext)(je),
                    n = t.web3Data,
                    s = (t.SetWeb3Data, Object(a.useContext)(ye)),
                    i = Object(a.useContext)(ve),
                    o = Object(a.useState)(ge),
                    l = Object(u.a)(o, 2),
                    d = l[0],
                    p = l[1],
                    b = Object(a.useState)(!1),
                    m = Object(u.a)(b, 2),
                    h = m[0],
                    f = m[1],
                    j = Object(a.useState)(!1),
                    y = Object(u.a)(j, 2),
                    x = y[0],
                    v = y[1];
                Object(a.useEffect)((function() {
                    h && f(!1)
                }), [i]);
                var O = Object(Se.jsx)("div", {
                        className: "HistoryPageButton LegacyButton",
                        children: Object(Se.jsx)(c.b, {
                            to: "/history_legacy",
                            children: Object(Se.jsx)("button", {
                                type: "button",
                                children: "Go to History from V1 contract"
                            })
                        })
                    }),
                    w = Object(Se.jsx)("div", {
                        className: "HistoryPageButton LegacyButton",
                        children: Object(Se.jsx)(c.b, {
                            to: "/history",
                            children: Object(Se.jsx)("button", {
                                type: "button",
                                children: "Go to History from V2(current) contract"
                            })
                        })
                    });

                function g() {
                    if (x) return null;
                    var e = window.location.pathname;
                    return e.includes("history_legacy") ? w : (e.includes("history"), O)
                }
                return n.address ? Object(Se.jsxs)(r.a.Fragment, {
                    children: [Object(Se.jsx)(ma, {
                        isLoaded: h
                    }), Object(Se.jsxs)("div", {
                        className: "HomeMain" + (i ? " MobileHistory" : ""),
                        style: {
                            display: h ? "flex" : "none"
                        },
                        children: [Object(Se.jsxs)("div", {
                            className: "HistoryButtons" + (i ? " Mobile" : ""),
                            children: [Object(Se.jsx)(g, {}), Object(Se.jsx)(ha, {
                                address: n.address,
                                contract: s.contract.user,
                                ToggleActive: function() {
                                    return v(!x)
                                },
                                isActive: x
                            })]
                        }), Object(Se.jsx)(xe.Provider, {
                            value: {
                                historySettings: d,
                                SetHistorySettings: p
                            },
                            children: x ? Object(Se.jsx)("div", {
                                className: "history" + (i ? " mobile" : "")
                            }) : Object(Se.jsxs)(r.a.Fragment, {
                                children: [Object(Se.jsx)(pa, {
                                    web3: n.web3,
                                    address: n.address,
                                    contract: s.contract,
                                    OnLoad: function() {
                                        h || f(!0)
                                    }
                                }), Object(Se.jsx)(ba, {})]
                            })
                        }), Object(Se.jsx)(ut, {})]
                    })]
                }) : Object(Se.jsx)("h1", {
                    children: "Please connect your wallet first!"
                })
            }));

            function ja() {
                var e = Object(a.useContext)(ye);
                return Object(Se.jsxs)("div", {
                    className: "HomeMain",
                    children: [Object(Se.jsx)("div", {
                        style: {
                            width: "90%",
                            height: "90%",
                            marginLeft: "0em"
                        },
                        children: Object(Se.jsx)(Nn.a, {
                            symbol: "BINANCE:" + e.tickerSymbol + "USDT",
                            theme: Tn.Themes.DARK,
                            interval: "5",
                            locale: "en",
                            autosize: !0
                        })
                    }), Object(Se.jsx)(ut, {})]
                })
            }
            var ya = ot(r.a.memo(ja)),
                xa = r.a.memo(ya),
                va = {
                    carlos: "0xB4Ab827cD769471E53DE31372e15a34D7e5B1A5B"
                };
            n(876);
            var Oa = function(e) {
                var t = Object(a.useContext)(je),
                    n = t.web3Data,
                    s = (t.SetWeb3Data, Object(a.useContext)(ye)),
                    i = Object(a.useState)(!1),
                    c = Object(u.a)(i, 2),
                    o = c[0],
                    l = c[1],
                    d = Object(a.useState)(1),
                    p = Object(u.a)(d, 2),
                    b = p[0],
                    m = p[1],
                    h = Object(a.useState)(null),
                    f = Object(u.a)(h, 2),
                    j = f[0],
                    y = f[1],
                    v = Object(a.useState)("0x0000000000000000000000000000000000000000"),
                    w = Object(u.a)(v, 2),
                    g = w[0],
                    k = w[1],
                    B = Object(a.useState)(0),
                    T = Object(u.a)(B, 2),
                    N = T[0],
                    S = T[1];

                function C() {
                    return P.apply(this, arguments)
                }

                function P() {
                    return (P = Object(x.a)(O.a.mark((function e() {
                        var t;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t = s.contract.user, j > 0 && Et(t.methods.user_ReferralFundsClaim().send({
                                        from: n.address
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function D() {
                    l(!0)
                }

                function I() {
                    return M.apply(this, arguments)
                }

                function M() {
                    return (M = Object(x.a)(O.a.mark((function e() {
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n.address && s.contract.user) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    A(), F(), W();
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function R() {
                    return R = Object(x.a)(O.a.mark((function e() {
                        var t, n, a;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = s.contractReferrals, e.next = 3, t.methods.referralFee().call();
                                case 3:
                                    n = e.sent, a = (Number(n) / 10).toFixed(2), m(a);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), R.apply(this, arguments)
                }

                function A() {
                    return E.apply(this, arguments)
                }

                function E() {
                    return E = Object(x.a)(O.a.mark((function e() {
                        var t, a, r;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = s.contract.user, e.next = 3, t.methods.ReferralRewardsAvailable(n.address).call();
                                case 3:
                                    a = e.sent, r = n.web3rpc.utils.fromWei(a, "Ether"), y(r);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), E.apply(this, arguments)
                }

                function F() {
                    return L.apply(this, arguments)
                }

                function L() {
                    return L = Object(x.a)(O.a.mark((function e() {
                        var t, a;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = s.contractReferrals, e.next = 3, t.methods.GetReferrer(n.address).call();
                                case 3:
                                    a = e.sent, k(a);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), L.apply(this, arguments)
                }

                function W() {
                    return H.apply(this, arguments)
                }

                function H() {
                    return (H = Object(x.a)(O.a.mark((function e() {
                        var t, a;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = s.contractReferrals, e.next = 3, t.methods.GetReferrals(n.address).call();
                                case 3:
                                    a = e.sent, S(a.length);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function U() {
                    var e = g.slice(0, 6) + "..." + g.slice(-4);
                    return "0x0000000000000000000000000000000000000000" == g && (e = "no one"), Object(Se.jsxs)(r.a.Fragment, {
                        children: [Object(Se.jsxs)("div", {
                            className: "Section",
                            children: [Object(Se.jsxs)("h3", {
                                children: ["Referrals (at ", b, "% fee)"]
                            }), Object(Se.jsxs)("p", {
                                children: ["You have: ", N, " referrals"]
                            }), Object(Se.jsx)("button", {
                                id: "ReferralLink",
                                onClick: D,
                                children: "Get more!"
                            })]
                        }), Object(Se.jsxs)("div", {
                            className: "Section",
                            children: [Object(Se.jsx)("h3", {
                                children: "Rewards"
                            }), Object(Se.jsxs)("p", {
                                children: [j, " BNB available"]
                            }), Object(Se.jsx)("button", {
                                onClick: C,
                                disabled: !(j > 0),
                                className: j > 0 ? "" : "Disabled",
                                children: "Claim"
                            })]
                        }), Object(Se.jsxs)("div", {
                            className: "Section",
                            children: [Object(Se.jsx)("h3", {
                                children: "Referrer"
                            }), Object(Se.jsxs)("p", {
                                children: ["You are referred by: ", e]
                            })]
                        })]
                    })
                }
                return nt(["Escape"], (function() {
                    return l(!1)
                })), Object(a.useEffect)((function() {
                    ! function() {
                        R.apply(this, arguments)
                    }(), I();
                    var e = setInterval(I, 5e3);
                    return function() {
                        clearInterval(e)
                    }
                }), [n, s]), n.address ? Object(Se.jsxs)("div", {
                    className: "ReferralsPage",
                    children: [Object(Se.jsx)(Ie, {
                        isShown: o,
                        closePopup: function() {
                            return l(!1)
                        },
                        content: function() {
                            var e = function(e) {
                                if (!e) throw new SyntaxError("missing required argument: address");
                                return window.location.hostname + "/?dogem=" + window.btoa(e)
                            }(n.address);
                            return Object(Se.jsxs)("div", {
                                id: "BoxForReferralURL",
                                children: [Object(Se.jsx)("a", {
                                    href: "https://" + e,
                                    children: e
                                }), Object(Se.jsx)("button", {
                                    onClick: function() {
                                        return function(e) {
                                            if (!e) throw new SyntaxError("missing required argument: url");
                                            navigator && navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(e)
                                        }("https://" + e)
                                    },
                                    children: "Copy"
                                })]
                            })
                        }()
                    }), Object(Se.jsx)(U, {})]
                }) : Object(Se.jsx)("div", {
                    children: Object(Se.jsx)("h1", {
                        children: "Please connect your wallet"
                    })
                })
            };
            var wa = ot((function(e) {
                return Object(Se.jsxs)("div", {
                    className: "HomeMain",
                    children: [Object(Se.jsx)(ut, {}), Object(Se.jsx)(Oa, {})]
                })
            }));
            n(877);
            var ga = ot((function() {
                return Object(Se.jsxs)("div", {
                    className: "HomeMain",
                    children: [Object(Se.jsx)("div", {
                        className: "social-container",
                        children: Object(Se.jsxs)("ul", {
                            className: "social-icons",
                            children: [Object(Se.jsx)("li", {
                                children: Object(Se.jsx)("a", {
                                    href: I,
                                    children: Object(Se.jsx)("i", {
                                        className: "fa fa-telegram"
                                    })
                                })
                            }), Object(Se.jsx)("br", {}), Object(Se.jsx)("b", {
                                children: "Telegram"
                            }), Object(Se.jsx)("br", {}), Object(Se.jsx)("li", {
                                children: Object(Se.jsx)("a", {
                                    href: "https://twitter.com/dogebets_gg",
                                    children: Object(Se.jsx)("i", {
                                        className: "fa fa-twitter"
                                    })
                                })
                            }), Object(Se.jsx)("br", {}), Object(Se.jsx)("b", {
                                children: "Twitter"
                            }), Object(Se.jsx)("br", {})]
                        })
                    }), Object(Se.jsx)(ut, {})]
                })
            }));
            n(878);
            var ka, Ba = ot((function() {
                    var e = Object(a.useContext)(ye);
                    return Object(Se.jsxs)("div", {
                        className: "HomeMain FAQ",
                        style: {
                            overflow: "auto"
                        },
                        children: [Object(Se.jsx)(ut, {}), Object(Se.jsx)("h1", {
                            style: {
                                textAlign: "center"
                            },
                            children: "FAQs"
                        }), Object(Se.jsxs)("label", {
                            class: "collapsible",
                            children: [Object(Se.jsx)("input", {
                                type: "checkbox"
                            }), Object(Se.jsx)("span", {
                                class: "collapser",
                                children: "How do I win?"
                            }), Object(Se.jsx)("span", {
                                class: "arrow",
                                children: ">"
                            }), Object(Se.jsx)("div", {
                                class: "collapsed",
                                children: Object(Se.jsxs)("ul", {
                                    children: [Object(Se.jsx)("li", {
                                        children: "Wager BNB on if the price of BNB-USDT will go UP or DOWN during the next round"
                                    }), Object(Se.jsx)("li", {
                                        children: "Choose correctly and claim your prize"
                                    }), Object(Se.jsx)("li", {
                                        children: "Prizes can be claimed from the Previous Card or the History page"
                                    })]
                                })
                            })]
                        }), Object(Se.jsxs)("label", {
                            class: "collapsible",
                            children: [Object(Se.jsx)("input", {
                                type: "checkbox"
                            }), Object(Se.jsx)("span", {
                                class: "collapser",
                                children: "Where do the prices come from?"
                            }), Object(Se.jsx)("span", {
                                class: "arrow",
                                children: ">"
                            }), Object(Se.jsx)("div", {
                                class: "collapsed",
                                children: Object(Se.jsxs)("ul", {
                                    children: [Object(Se.jsx)("li", {
                                        children: "DogeBets uses the Binance API feed for real-time price updates "
                                    }), Object(Se.jsx)("li", {
                                        children: "This price source updates instantly and will always match the Binance BNB-USDT chart"
                                    }), Object(Se.jsx)("li", {
                                        children: Object(Se.jsx)("a", {
                                            href: "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT",
                                            children: "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT"
                                        })
                                    })]
                                })
                            })]
                        }), Object(Se.jsxs)("label", {
                            class: "collapsible",
                            children: [Object(Se.jsx)("input", {
                                type: "checkbox"
                            }), Object(Se.jsx)("span", {
                                class: "collapser",
                                children: "What is the smart contract address?"
                            }), Object(Se.jsx)("span", {
                                class: "arrow",
                                children: ">"
                            }), Object(Se.jsx)("div", {
                                class: "collapsed",
                                children: Object(Se.jsxs)("ul", {
                                    children: [Object(Se.jsx)("li", {
                                        children: e.contract.contractAddress
                                    }), Object(Se.jsx)("li", {
                                        children: "All wagers and claims can be viewed in the smart contract"
                                    }), Object(Se.jsx)("li", {
                                        children: Object(Se.jsx)("a", {
                                            href: "https://bscscan.com/address/" + e.contract.contractAddress + "#readContract",
                                            children: "DogeBets Contract"
                                        })
                                    })]
                                })
                            })]
                        }), Object(Se.jsxs)("label", {
                            class: "collapsible",
                            children: [Object(Se.jsx)("input", {
                                type: "checkbox"
                            }), Object(Se.jsx)("span", {
                                class: "collapser",
                                children: "Audit. Is your smart contract audited?"
                            }), Object(Se.jsx)("span", {
                                class: "arrow",
                                children: ">"
                            }), Object(Se.jsx)("div", {
                                class: "collapsed",
                                children: Object(Se.jsxs)("ul", {
                                    children: [Object(Se.jsx)("li", {
                                        children: "Yes, it is audited by RD Auditors(rdauditors.com)"
                                    }), Object(Se.jsx)("li", {
                                        children: Object(Se.jsx)("a", {
                                            href: "https://www.rdauditors.com/wp-content/uploads/2022/03/DogeBets-Smart-Contract-Security-Report.pdf",
                                            children: "Audit summary"
                                        })
                                    })]
                                })
                            })]
                        }), Object(Se.jsxs)("label", {
                            class: "collapsible",
                            children: [Object(Se.jsx)("input", {
                                type: "checkbox"
                            }), Object(Se.jsx)("span", {
                                class: "collapser",
                                children: "What is a house bet?"
                            }), Object(Se.jsx)("span", {
                                class: "arrow",
                                children: ">"
                            }), Object(Se.jsx)("div", {
                                class: "collapsed",
                                children: Object(Se.jsxs)("ul", {
                                    children: [Object(Se.jsx)("li", {
                                        children: "DogeBets places a random sized bet on both sides (UP and DOWN) each round "
                                    }), Object(Se.jsx)("li", {
                                        children: "This allows anyone to play 24/7, even if no one else is currently playing"
                                    }), Object(Se.jsx)("li", {
                                        children: "House bets are locked in the contract each round and can be verified on-chain"
                                    })]
                                })
                            })]
                        }), Object(Se.jsxs)("label", {
                            class: "collapsible",
                            children: [Object(Se.jsx)("input", {
                                type: "checkbox"
                            }), Object(Se.jsx)("span", {
                                class: "collapser",
                                children: "What happens if a round ends in a tie?"
                            }), Object(Se.jsx)("span", {
                                class: "arrow",
                                children: ">"
                            }), Object(Se.jsx)("div", {
                                class: "collapsed",
                                children: Object(Se.jsxs)("ul", {
                                    children: [Object(Se.jsx)("li", {
                                        children: "The round is automatically cancelled and eligble to reclaim"
                                    }), Object(Se.jsx)("li", {
                                        children: "House fees are not applied to reclaimed rounds"
                                    }), Object(Se.jsx)("li", {
                                        children: "Check the History page or the Previous card for the reclaim buttom"
                                    })]
                                })
                            })]
                        }), Object(Se.jsxs)("label", {
                            class: "collapsible",
                            children: [Object(Se.jsx)("input", {
                                type: "checkbox"
                            }), Object(Se.jsx)("span", {
                                class: "collapser",
                                children: "What is the house fee?"
                            }), Object(Se.jsx)("span", {
                                class: "arrow",
                                children: ">"
                            }), Object(Se.jsx)("div", {
                                class: "collapsed",
                                children: Object(Se.jsxs)("ul", {
                                    children: [Object(Se.jsx)("li", {
                                        children: 'There is a 5% "DogeHouse" fee on all claimed winnings'
                                    }), Object(Se.jsx)("li", {
                                        children: "The house fee only applies to winning rounds"
                                    })]
                                })
                            })]
                        }), Object(Se.jsxs)("label", {
                            class: "collapsible",
                            children: [Object(Se.jsx)("input", {
                                type: "checkbox"
                            }), Object(Se.jsx)("span", {
                                class: "collapser",
                                children: "How are the payout ratios calculated?"
                            }), Object(Se.jsx)("span", {
                                class: "arrow",
                                children: ">"
                            }), Object(Se.jsx)("div", {
                                class: "collapsed",
                                children: Object(Se.jsxs)("ul", {
                                    children: [Object(Se.jsx)("li", {
                                        children: "The payout ratios automatically update every time a bet is placed"
                                    }), Object(Se.jsx)("li", {
                                        children: "Example: Total pool size = 2.5 BNB (1.0 BNB DOWN, 1.5 BNB UP)"
                                    }), Object(Se.jsxs)("ul", {
                                        children: [Object(Se.jsx)("li", {
                                            children: "UP payout = 2.5 / 1.0 = 2.50x"
                                        }), Object(Se.jsx)("li", {
                                            children: "DOWN payout = 2.5 / 1.5 = 1.66x"
                                        })]
                                    })]
                                })
                            })]
                        }), Object(Se.jsxs)("label", {
                            class: "collapsible",
                            children: [Object(Se.jsx)("input", {
                                type: "checkbox"
                            }), Object(Se.jsx)("span", {
                                class: "collapser",
                                children: "How do referrals work?"
                            }), Object(Se.jsx)("span", {
                                class: "arrow",
                                children: ">"
                            }), Object(Se.jsx)("div", {
                                class: "collapsed",
                                children: Object(Se.jsxs)("ul", {
                                    children: [Object(Se.jsx)("li", {
                                        children: "Referrals give you an opportunity to profit by bringing in more players"
                                    }), Object(Se.jsx)("li", {
                                        children: "For every player you bring, you will be rewarded with 1% of their future wagers. These rewards will accumulate under your wallet address within our smart contract and can be redeemed whenever you like and as often as you like."
                                    }), Object(Se.jsx)("li", {
                                        children: "In order for a player to become referred to you - just send them your referral link. The player then simply needs to bet one time after following your link; this permanently refers their wallet to yours."
                                    }), Object(Se.jsxs)("li", {
                                        children: ["Your referrals are manageable through ", Object(Se.jsx)("a", {
                                            href: "referrals",
                                            children: "referrals"
                                        }), " page"]
                                    })]
                                })
                            })]
                        })]
                    })
                })),
                Ta = (ot((function() {
                    return Object(Se.jsxs)("div", {
                        className: "HomeMain",
                        children: [Object(Se.jsx)("h1", {
                            children: "Lottery"
                        }), Object(Se.jsx)(ut, {})]
                    })
                })), n.p + "static/media/dogecoin3DMain.49bd443a.webm"),
                Na = (n(879), Object(b.a)(c.c)(ka || (ka = Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    width: 35vw;\n    height: 55vh;\n    background-color: #0A0314;\n    border: 4px solid #E2BD00;\n    border-radius: 30px;\n    position: static;\n    z-index: 5;\n    box-shadow: 4px 4px 5px #2329366b;\n    text-decoration: none;\n    color: #E2BD00;\n    font-weight: 800;\n\n    \n    .backPrediction {\n        opacity: 0%;\n        transform: scale (1);\n        transition: all 350ms ease;\n        \n        \n    }\n    video {\n        transform: scale (1);\n        transition: all 350ms ease;\n        \n    }\n\n&:hover {\n   video {\n    transform: scale(1.2) translateY(1rem);\n    \n   } \n   .backPrediction {\n    opacity: 100%;\n    transform: scale(1.3);\n    }\n}\n \n"])))),
                Sa = ot((function() {
                    var e = Object(a.useState)(!0),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        r = t[1];
                    return Object(Se.jsxs)(Na, {
                        clicked: n,
                        onClick: function() {
                            return r(!1)
                        },
                        exact: !0,
                        activeClassName: "ClosedDoge",
                        to: "/",
                        children: [Object(Se.jsxs)("video", {
                            id: "DogeCoin3D",
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            playsinline: !0,
                            children: [Object(Se.jsx)("source", {
                                src: Ta,
                                type: "video/mp4"
                            }), Object(Se.jsx)("source", {
                                src: Ta,
                                type: "video/ogg"
                            }), "Seems like your browser does not support HTML5 video"]
                        }), Object(Se.jsx)("p", {
                            className: "backPrediction",
                            children: "Back to Predictions Page"
                        }), Object(Se.jsx)("p", {
                            className: "dogerights",
                            children: "DogeBets 2021. All Dogerights reserved. Such bets. Much winning!"
                        }), Object(Se.jsx)(ut, {})]
                    })
                }));
            var Ca = ot((function(e) {
                return console.log("dogdick"), Object(Se.jsxs)("div", {
                    className: "HomeMain",
                    children: [Object(Se.jsx)("div", {
                        children: Object(Se.jsx)("h1", {
                            children: "404 Not Found"
                        })
                    }), Object(Se.jsx)(ut, {})]
                })
            }));

            function Pa(e) {
                if (!e) throw new SyntaxError("missing required argument: direction");
                var t;
                switch (e) {
                    case "b":
                    default:
                        t = "bottom";
                        break;
                    case "t":
                        t = "top";
                        break;
                    case "r":
                        t = "right";
                        break;
                    case "l":
                        t = "left"
                }
                return t
            }
            var Da, Ia = function() {
                    var e = new URLSearchParams(window.location.search),
                        t = document.documentElement.style;
                    ! function() {
                        var n = e.get("theme_gold"),
                            a = e.get("theme_white"),
                            r = e.get("background_black"),
                            s = e.get("menu_purple"),
                            i = e.get("bull_green"),
                            c = e.get("bear_red");
                        n && t.setProperty("--color-theme-gold", "#" + n), a && t.setProperty("--color-theme-white", "#" + a), r && t.setProperty("--color-background-black", "#" + r), s && t.setProperty("--color-menu-purple", "#" + s), i && t.setProperty("--color-bull-green", "#" + i), c && t.setProperty("--color-bear-red", "#" + c)
                    }(),
                    function() {
                        var n = e.get("page_bg"),
                            a = e.get("menu_bg");
                        if (n)
                            if (n.includes("http")) t.setProperty("--gradient-page-bg", "url(" + decodeURIComponent(n) + ")");
                            else if (n.length > 8) {
                            var r = n[0],
                                s = n.slice(1, 9),
                                i = n.slice(9, 17);
                            r = Pa(r), t.setProperty("--gradient-page-bg", "linear-gradient(to " + r + ", #" + s + ", #" + i + ")")
                        } else t.setProperty("--gradient-page-bg", "#" + n);
                        if (a)
                            if (a.includes("http")) t.setProperty("--gradient-navbar-bg", "url(" + decodeURIComponent(a) + ")");
                            else if (a.length > 8) {
                            var c = a[0],
                                o = a.slice(1, 9),
                                u = a.slice(9, 17);
                            c = Pa(c), t.setProperty("--gradient-navbar-bg", "linear-gradient(to " + c + ", #" + o + ", #" + u + ")")
                        } else t.setProperty("--gradient-navbar-bg", "#" + a)
                    }()
                },
                Ma = b.a.div(Da || (Da = Object(l.a)(["\n  width: 100vw;\n  height: calc(100 * var(--vh-true));\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  h1 {\n    font-size: calc(2rem + 2vw);\n  }\n"]))),
                Ra = {
                    web3: null,
                    web3rpc: q(),
                    address: null
                };
            var Aa = function() {
                var e = Object(d.f)(),
                    t = Object(a.useState)(Ra),
                    n = Object(u.a)(t, 2),
                    r = n[0],
                    s = n[1],
                    i = Object(a.useState)(Q()),
                    c = Object(u.a)(i, 2),
                    l = c[0],
                    b = c[1];

                function h() {
                    b(Q()), f()
                }

                function f() {
                    document.querySelector("html").style.setProperty("--vh-true", window.innerHeight / 100 + "px")
                }
                return Object(a.useEffect)((function() {
                    return f(), g.web3 = Ra.web3, g.web3rpc = Ra.web3rpc,
                        function() {
                            window.addEventListener("resize", h);
                            try {
                                window.screen.orientation ? window.screen.orientation.addEventListener("change", h) : window.addEventListener("orientationchange", h)
                            } catch (e) {
                                if (e instanceof TypeError) return;
                                console.error(e)
                            }
                        }(),
                        function() {
                            var e = new URLSearchParams(window.location.search).get("dogem"),
                                t = window.atob(e);
                            null !== e && "" !== e && g.web3rpc && (g.web3rpc.utils.checkAddressChecksum(t) ? localStorage.setItem("dogebets_referrerAddress", t) : va[e] ? localStorage.setItem("dogebets_referrerAddress", va[e]) : (console.warn("mangled referrer address received:"), console.warn({
                                raw: e,
                                decoded: t
                            })))
                        }(), Ia(),
                        function() {
                            ! function() {
                                window.removeEventListener("resize", h);
                                try {
                                    window.screen.orientation ? window.screen.orientation.removeEventListener("change", h) : window.removeEventListener("orientationchange", h)
                                } catch (e) {
                                    if (e instanceof TypeError) return;
                                    console.error(e)
                                }
                            }()
                        }
                }), []), Object(Se.jsx)(je.Provider, {
                    value: {
                        web3Data: r,
                        SetWeb3Data: s
                    },
                    children: Object(Se.jsxs)(ve.Provider, {
                        value: l,
                        children: [Object(Se.jsx)(it, {}), Object(Se.jsx)($e, {}), Object(Se.jsx)(m.a, {}), Object(Se.jsx)(De, {
                            delay: 2e3
                        }), Object(Se.jsx)(Ma, {
                            children: Object(Se.jsx)(p.a, {
                                exitBeforeEnter: !0,
                                children: Object(Se.jsxs)(d.c, {
                                    location: e,
                                    children: [Object(Se.jsx)(d.a, {
                                        exact: !0,
                                        path: "/",
                                        render: function(e) {
                                            return Object(Se.jsx)(ye.Provider, {
                                                value: Oe(r),
                                                children: Object(Se.jsx)(sa, Object(o.a)({}, e))
                                            })
                                        }
                                    }), Object(Se.jsx)(d.a, {
                                        path: "/history",
                                        render: function(e) {
                                            return Object(Se.jsx)(ye.Provider, {
                                                value: Oe(r),
                                                children: Object(Se.jsx)(fa, Object(o.a)({}, e))
                                            })
                                        }
                                    }), Object(Se.jsx)(d.a, {
                                        path: "/history_legacy",
                                        render: function(e) {
                                            return Object(Se.jsx)(ye.Provider, {
                                                value: we(r),
                                                children: Object(Se.jsx)(fa, Object(o.a)({}, e))
                                            })
                                        }
                                    }), Object(Se.jsx)(d.a, {
                                        path: "/chart",
                                        render: function(e) {
                                            return Object(Se.jsx)(ye.Provider, {
                                                value: Oe(r),
                                                children: Object(Se.jsx)(xa, Object(o.a)({}, e))
                                            })
                                        }
                                    }), Object(Se.jsx)(d.a, {
                                        path: "/referrals",
                                        render: function(e) {
                                            return Object(Se.jsx)(ye.Provider, {
                                                value: Oe(r),
                                                children: Object(Se.jsx)(wa, Object(o.a)({}, e))
                                            })
                                        }
                                    }), Object(Se.jsx)(d.a, {
                                        path: "/faq",
                                        render: function(e) {
                                            return Object(Se.jsx)(ye.Provider, {
                                                value: Oe(r),
                                                children: Object(Se.jsx)(Ba, Object(o.a)({}, e))
                                            })
                                        }
                                    }), Object(Se.jsx)(d.a, {
                                        path: "/flip",
                                        component: Sa
                                    }), Object(Se.jsx)(d.a, {
                                        path: "/social",
                                        component: ga
                                    }), Object(Se.jsx)(d.a, {
                                        component: Ca
                                    })]
                                }, e.pathname)
                            })
                        })]
                    })
                })
            };
            n(880);
            i.a.render(Object(Se.jsx)(r.a.StrictMode, {
                children: Object(Se.jsx)(c.a, {
                    children: Object(Se.jsx)(Aa, {})
                })
            }), document.getElementById("root"))
        }
    },
    [
        [881, 1, 2]
    ]
]);