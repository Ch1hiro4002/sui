searchState.loadedDescShard("sui_indexer_alt_framework", 0, "Command-line arguments for the indexer\nAdds a new pipeline to this indexer and starts it up. …\nThe database connection pool used by the indexer.\nOverride for the checkpoint to start ingestion from – …\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe ingestion client used by the indexer to fetch …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOverride for the checkpoint to end ingestion at …\nAddress to serve Prometheus Metrics from.\nCombine the provided <code>migrations</code> with the migrations …\nCreate a new instance of the indexer framework. <code>db_args</code>, …\nOnly run the following pipelines. If not provided, all …\nStart ingesting checkpoints. Ingestion either starts from …\nAdds a new pipeline to this indexer and starts it up. …\nDon’t write to the watermark tables for concurrent …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMaximum size of checkpoint backlog across all workers …\nReturns the argument unchanged.\nReturns the argument unchanged.\nMaximum number of checkpoints to attempt to fetch …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPath to the local ingestion directory. If both …\nRemote Store to fetch checkpoints from.\nPolling interval to retry fetching checkpoints that do not …\nContains the error value\nContains the success value\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>ToString::to_string</code>, but without panic on OOM.\nFetch checkpoint data by sequence number.\nContains the error value\nContains the success value\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\n<code>ToString::to_string</code>, but without panic on OOM.\nHow much concurrency to use when processing checkpoint …\nHow much concurrency to use when processing checkpoint …\nUsed to identify the pipeline in logs and metrics.\nImplementors of this trait are responsible for …\nThe type of value being inserted by the handler.\nThe collector will check for pending data at least this …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe processing logic for turning a checkpoint into rows of …\nWatermark task will check for pending watermarks this …\nNumber of concurrent writers per pipeline.\nConfiguration for a concurrent pipeline\nHandlers implement the logic for a given indexing …\nIf there are more than this many rows pending, the …\nIf at least this many rows are pending, the committer will …\nHow many checkpoints lagged behind latest seen checkpoint …\nTake a chunk of values and commit them to the database, …\nConfiguration for the writer, that makes forward progress.\nHow long to wait after the reader low watermark was set, …\nReturns the argument unchanged.\nReturns the argument unchanged.\nHow often the pruner should check whether there is any …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe maximum range to try and prune in one request, …\nClean up data between checkpoints <code>_from</code> and <code>_to_exclusive</code> …\nConfiguration for the pruner, that deletes old data.\nHow much data to keep, this is measured in checkpoints.\nA type to combine multiple <code>Self::Value</code>-s into. This can be …\nHandlers implement the logic for a given indexing …\nMaximum number of checkpoints to try and write in a single …\nIf at least this many rows are pending, the committer will …\nConfiguration for a sequential pipeline\nAdd <code>values</code> from processing a checkpoint to the current …\nHow many checkpoints to hold back writes for.\nTake a batch of values and commit them to the database, …\nConfiguration for the writer, that makes forward progress.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nExtension trait introducing <code>try_for_each_spawned</code> to all …\nManages cleanly exiting the process, either because one of …\nAttempts to run this stream to completion, executing the …")