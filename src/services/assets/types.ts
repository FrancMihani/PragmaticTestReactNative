export type AssetDTO = {
  _internal_temp_agora_id: string
  contract_addresses: any
  id: string
  name: string
  serial_id: number
  slug: string
  symbol: string
}

export type AssetMetricsDTO = {
  _internal_temp_agora_id: string
  alert_messages: any
  all_time_high: AllTimeHigh
  blockchain_stats_24_hours: BlockchainStats24Hours
  contract_addresses: any
  cycle_low: CycleLow
  developer_activity: DeveloperActivity
  exchange_flows: ExchangeFlows
  id: string
  market_data: MarketData
  market_data_liquidity: MarketDataLiquidity
  marketcap: Marketcap
  miner_flows: MinerFlows
  mining_stats: MiningStats
  misc_data: MiscData
  name: string
  on_chain_data: OnChainData
  reddit: Reddit
  risk_metrics: RiskMetrics
  roi_by_year: RoiByYear
  roi_data: RoiData
  serial_id: number
  slug: string
  supply: Supply
  supply_activity: SupplyActivity
  supply_distribution: SupplyDistribution
  symbol: string
  token_sale_stats: TokenSaleStats
}

type AllTimeHigh = {
  at: string
  breakeven_multiple: number
  days_since: number
  percent_down: number
  price: number
}

type BlockchainStats24Hours = {
  adjusted_nvt: number
  adjusted_transaction_volume: number
  average_difficulty: number
  count_of_active_addresses: number
  count_of_blocks_added: number
  count_of_payments: number
  count_of_tx: number
  kilobytes_added: any
  median_tx_fee: number
  median_tx_value: number
  new_issuance: number
  transaction_volume: number
}

type CycleLow = {
  at: string
  days_since: number
  percent_up: number
  price: number
}

type DeveloperActivity = {
  commits_last_1_year: any
  commits_last_3_months: any
  lines_added_last_1_year: any
  lines_added_last_3_months: any
  lines_deleted_last_1_year: any
  lines_deleted_last_3_months: any
  stars: number
  watchers: number
}

type ExchangeFlows = {
  flow_in_binance_native_units: number
  flow_in_binance_usd: number
  flow_in_bitfinex_native_units: number
  flow_in_bitfinex_usd: number
  flow_in_bitmex_native_units: number
  flow_in_bitmex_usd: number
  flow_in_bitstamp_native_units: number
  flow_in_bitstamp_usd: number
  flow_in_bittrex_native_units: number
  flow_in_bittrex_usd: number
  flow_in_exchange_native_units: number
  flow_in_exchange_native_units_inclusive: number
  flow_in_exchange_usd: number
  flow_in_exchange_usd_inclusive: number
  flow_in_gemini_native_units: number
  flow_in_gemini_usd: number
  flow_in_huobi_native_units: number
  flow_in_huobi_usd: number
  flow_in_kraken_native_units: number
  flow_in_kraken_usd: number
  flow_in_poloniex_native_units: number
  flow_in_poloniex_usd: number
  flow_net_binance_native_units: number
  flow_net_binance_usd: number
  flow_net_bitfinex_native_units: number
  flow_net_bitfinex_usd: number
  flow_net_bitmex_native_units: number
  flow_net_bitmex_usd: number
  flow_net_bitstamp_native_units: number
  flow_net_bitstamp_usd: number
  flow_net_bittrex_native_units: number
  flow_net_bittrex_usd: number
  flow_net_gemini_native_units: number
  flow_net_gemini_usd: number
  flow_net_huobi_native_units: number
  flow_net_huobi_usd: number
  flow_net_kraken_native_units: number
  flow_net_kraken_usd: number
  flow_net_poloniex_native_units: number
  flow_net_poloniex_usd: number
  flow_out_binance_native_units: number
  flow_out_binance_usd: number
  flow_out_bitfinex_native_units: number
  flow_out_bitfinex_usd: number
  flow_out_bitmex_native_units: number
  flow_out_bitmex_usd: number
  flow_out_bitstamp_native_units: number
  flow_out_bitstamp_usd: number
  flow_out_bittrex_native_units: number
  flow_out_bittrex_usd: number
  flow_out_exchange_native_units: number
  flow_out_exchange_native_units_inclusive: number
  flow_out_exchange_usd: number
  flow_out_exchange_usd_inclusive: number
  flow_out_gemini_native_units: number
  flow_out_gemini_usd: number
  flow_out_huobi_native_units: number
  flow_out_huobi_usd: number
  flow_out_kraken_native_units: number
  flow_out_kraken_usd: number
  flow_out_poloniex_native_units: number
  flow_out_poloniex_usd: number
  supply_binance_native_units: number
  supply_binance_usd: number
  supply_bitfinex_native_units: number
  supply_bitfinex_usd: number
  supply_bitmex_native_units: number
  supply_bitmex_usd: number
  supply_bitstamp_native_units: number
  supply_bitstamp_usd: number
  supply_bittrex_native_units: number
  supply_bittrex_usd: number
  supply_exchange_native_units: number
  supply_exchange_usd: number
  supply_gemini_native_units: number
  supply_gemini_usd: number
  supply_huobi_native_units: number
  supply_huobi_usd: number
  supply_kraken_native_units: number
  supply_kraken_usd: number
  supply_poloniex_native_units: number
  supply_poloniex_usd: number
}

type MarketData = {
  last_trade_at: string
  ohlcv_last_1_hour: OhlcvLast1Hour
  ohlcv_last_24_hour: OhlcvLast24Hour
  percent_change_btc_last_1_hour: number
  percent_change_btc_last_24_hours: number
  percent_change_eth_last_1_hour: number
  percent_change_eth_last_24_hours: number
  percent_change_usd_last_1_hour: number
  percent_change_usd_last_24_hours: number
  price_btc: number
  price_eth: number
  price_usd: number
  real_volume_last_24_hours: number
  volume_last_24_hours: number
  volume_last_24_hours_overstatement_multiple: number
}

type OhlcvLast1Hour = {
  close: number
  high: number
  low: number
  open: number
  volume: number
}

type OhlcvLast24Hour = {
  close: number
  high: number
  low: number
  open: number
  volume: number
}

type MarketDataLiquidity = {
  asset_bid_depth: any
  clearing_prices_to_sell: any
  marketcap: any
  updated_at: string
  usd_bid_depth: any
}

type Marketcap = {
  current_marketcap_usd: number
  liquid_marketcap_usd: any
  marketcap_dominance_percent: number
  outstanding_marketcap_usd: number
  rank: number
  realized_marketcap_usd: number
  volume_turnover_last_24_hours_percent: any
  y_2050_marketcap_usd: any
  y_plus10_marketcap_usd: any
}

type MinerFlows = {
  supply_1hop_miners_native_units: number
  supply_1hop_miners_usd: number
  supply_miners_native_units: number
  supply_miners_usd: number
}

type MiningStats = {
  '1_hour_attack_cost': any
  '24_hours_attack_cost': any
  attack_appeal: any
  available_on_nicehash_percent: number
  average_difficulty: number
  hash_rate: number
  hash_rate_30d_average: number
  mining_algo: string
  mining_revenue_from_fees_percent_last_24_hours: number
  mining_revenue_native: number
  mining_revenue_per_hash_native_units: number
  mining_revenue_per_hash_per_second_native_units: number
  mining_revenue_per_hash_per_second_usd: number
  mining_revenue_per_hash_usd: number
  mining_revenue_total: number
  mining_revenue_usd: number
  network_hash_rate: string
}

type MiscData = {
  asset_age_days: any
  asset_created_at: any
  btc_current_normalized_supply_price_usd: any
  btc_y2050_normalized_supply_price_usd: any
  categories: string[]
  private_market_price_usd: any
  sectors: string[]
  tags: any
  vladimir_club_cost: any
}

type OnChainData = {
  active_addresses: number
  active_addresses_received_count: number
  active_addresses_sent_count: number
  addresses_balance_greater_0_001_native_units_count: number
  addresses_balance_greater_0_01_native_units_count: number
  addresses_balance_greater_0_1_native_units_count: number
  addresses_balance_greater_100_native_units_count: number
  addresses_balance_greater_100_usd_count: number
  addresses_balance_greater_100k_native_units_count: number
  addresses_balance_greater_100k_usd_count: number
  addresses_balance_greater_10_native_units_count: number
  addresses_balance_greater_10_usd_count: number
  addresses_balance_greater_10k_native_units_count: number
  addresses_balance_greater_10k_usd_count: number
  addresses_balance_greater_10m_usd_count: number
  addresses_balance_greater_1_native_units_count: number
  addresses_balance_greater_1_usd_count: number
  addresses_balance_greater_1k_native_units_count: number
  addresses_balance_greater_1k_usd_count: number
  addresses_balance_greater_1m_native_units_count: number
  addresses_balance_greater_1m_usd_count: number
  addresses_count: number
  adjusted_nvt: number
  adjusted_nvt_90d_moving_average: number
  adjusted_rvt: number
  adjusted_rvt_90d_moving_average: number
  adjusted_txn_volume_last_24_hours_native_units: number
  adjusted_txn_volume_last_24_hours_usd: number
  average_block_gas_limit: any
  average_block_interval: number
  average_block_weight: number
  average_fee_native_units: number
  average_fee_usd: number
  average_transfer_value_native_units: number
  average_transfer_value_usd: number
  average_txn_gas_limit: any
  average_txn_gas_used: any
  average_utxo_age: number
  block_height: number
  block_size_bytes_average: number
  block_size_bytes_total: number
  block_weight: number
  blocks_added_last_24_hours: number
  hash_rate: number
  issuance_last_24_hours_native_units: number
  issuance_rate: number
  issuance_rate_daily: number
  issuance_total_native_units: number
  issuance_total_usd: number
  median_fee_native_units: number
  median_fee_usd: number
  median_transfer_value_native_units: number
  median_transfer_value_usd: number
  median_utxo_age: number
  mining_revenue_from_uncle_blocks_percent_last_24_hours: any
  new_issuance: number
  realized_marketcap_usd: number
  total_fees_last_24_hours: number
  total_fees_last_24_hours_usd: number
  transfer_count_last_24_hours: number
  transfer_erc721_count_last_24_hours: any
  transfer_erc_20_count_last_24_hours: any
  txn_contracts_calls_count_last_24_hours: any
  txn_contracts_calls_success_count_last_24_hours: any
  txn_contracts_count_last_24_hours: any
  txn_contracts_creation_count_last_24_hours: any
  txn_contracts_destruction_count_last_24_hours: any
  txn_count_last_24_hours: number
  txn_erc20_count_last_24_hours: any
  txn_erc721_count_last_24_hours: any
  txn_gas_limit_last_24_hours: any
  txn_gas_used_last_24_hours: any
  txn_per_second_count: number
  txn_token_count_last_24_hours: any
  txn_volume_last_24_hours_native_units: number
  txn_volume_last_24_hours_usd: number
  uncle_blocks_count_last_24_hours: any
  uncle_rewards_last_24_hours_native_units: any
  uncle_rewards_last_24_hours_usd: any
  utxo_count_last_24_hours: number
  utxo_in_loss_count: number
  utxo_in_profit_count: number
  value_weighted_average_utxo_age: number
}

type Reddit = {
  active_user_count: number
  subscribers: number
}

type RiskMetrics = {
  sharpe_ratios: SharpeRatios
  volatility_stats: VolatilityStats
}

type SharpeRatios = {
  last_1_year: number
  last_30_days: number
  last_3_years: number
  last_90_days: number
}

type VolatilityStats = {
  volatility_last_1_year: number
  volatility_last_30_days: number
  volatility_last_3_years: number
  volatility_last_90_days: number
}

type RoiByYear = {
  '2011_usd_percent': number
  '2012_usd_percent': number
  '2013_usd_percent': number
  '2014_usd_percent': number
  '2015_usd_percent': number
  '2016_usd_percent': number
  '2017_usd_percent': number
  '2018_usd_percent': number
  '2019_usd_percent': number
  '2020_usd_percent': number
  '2021_usd_percent': number
}

type RoiData = {
  percent_change_btc_last_1_month: number
  percent_change_btc_last_1_week: number
  percent_change_btc_last_1_year: number
  percent_change_btc_last_3_months: number
  percent_change_eth_last_1_month: number
  percent_change_eth_last_1_week: number
  percent_change_eth_last_1_year: number
  percent_change_eth_last_3_months: number
  percent_change_last_1_month: number
  percent_change_last_1_week: number
  percent_change_last_1_year: number
  percent_change_last_3_months: number
  percent_change_month_to_date: number
  percent_change_quarter_to_date: number
  percent_change_year_to_date: number
}

type Supply = {
  annual_inflation_percent: any
  circulating: number
  liquid: any
  stock_to_flow: any
  supply_revived_90d: number
  y_2050: any
  y_2050_issued_percent: any
  y_plus10: any
  y_plus10_issued_percent: any
}

type SupplyActivity = {
  outstanding: number
  supply_active_10y: number
  supply_active_180d: number
  supply_active_1d: number
  supply_active_1y: number
  supply_active_1y_percent: number
  supply_active_2y: number
  supply_active_30d: number
  supply_active_3y: number
  supply_active_4y: number
  supply_active_5y: number
  supply_active_7d: number
  supply_active_90d: number
  supply_active_ever: number
  supply_revived_1y: number
  supply_revived_2y: number
  supply_revived_30d: number
  supply_revived_3y: number
  supply_revived_4y: number
  supply_revived_5y: number
  supply_revived_7d: number
  supply_revived_90d: number
}

type SupplyDistribution = {
  supply_in_addresses_balance_greater_0_001_native_units: number
  supply_in_addresses_balance_greater_0_01_native_units: number
  supply_in_addresses_balance_greater_0_1_native_units: number
  supply_in_addresses_balance_greater_100_native_units: number
  supply_in_addresses_balance_greater_100_usd: number
  supply_in_addresses_balance_greater_100k_native_units: number
  supply_in_addresses_balance_greater_100k_usd: number
  supply_in_addresses_balance_greater_10_native_units: number
  supply_in_addresses_balance_greater_10_usd: number
  supply_in_addresses_balance_greater_10k_native_units: number
  supply_in_addresses_balance_greater_10k_usd: number
  supply_in_addresses_balance_greater_10m_usd: number
  supply_in_addresses_balance_greater_1_native_units: number
  supply_in_addresses_balance_greater_1_usd: number
  supply_in_addresses_balance_greater_1k_native_units: number
  supply_in_addresses_balance_greater_1k_usd: number
  supply_in_addresses_balance_greater_1m_native_units: number
  supply_in_addresses_balance_greater_1m_usd: number
  supply_in_contracts_native_units: any
  supply_in_contracts_usd: any
  supply_in_top_100_addresses: number
  supply_in_top_10_percent_addresses: number
  supply_in_top_1_percent_addresses: number
  supply_in_utxo_in_loss: number
  supply_in_utxo_in_profit: number
  supply_shielded: any
}

type TokenSaleStats = {
  roi_since_sale_btc_percent: any
  roi_since_sale_eth_percent: any
  roi_since_sale_usd_percent: any
  sale_end_date: any
  sale_proceeds_usd: any
  sale_start_date: any
}
